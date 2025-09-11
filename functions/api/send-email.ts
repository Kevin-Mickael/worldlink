// Interface ContactForm définie localement pour éviter les problèmes d'import
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  country?: string;
  language?: 'fr' | 'en';
}

// Type pour les fonctions Cloudflare Pages
interface PagesFunction {
  (context: {
    request: Request;
    env: { BREVO_API_KEY: string };
    params: Record<string, string>;
    waitUntil: (promise: Promise<any>) => void;
    passThroughOnException: () => void;
    next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
    data: Record<string, unknown>;
  }): Response | Promise<Response>;
}

interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

interface BrevoEmailData {
  sender: {
    name: string;
    email: string;
  };
  to: Array<{
    email: string;
    name: string;
  }>;
  subject: string;
  htmlContent: string;
  textContent: string;
}

export const onRequestPost: PagesFunction = async (context) => {
  const { request, env } = context;

  // Configuration CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Gérer les requêtes OPTIONS pour CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    console.log('📧 Email function called with method:', request.method);
    console.log('🔧 Environment variables available:', Object.keys(env));
    console.log('🔑 BREVO_API_KEY exists:', !!env.BREVO_API_KEY);
    
    // Vérifier que la méthode est POST
    if (request.method !== 'POST') {
      console.log('❌ Method not allowed:', request.method);
      return new Response(
        JSON.stringify({ success: false, message: 'Method not allowed' }),
        {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Vérifier la présence de la clé API Brevo
    if (!env.BREVO_API_KEY) {
      console.error('❌ BREVO_API_KEY not found in environment variables');
      return new Response(
        JSON.stringify({ success: false, message: 'Server configuration error - API key missing' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('✅ BREVO_API_KEY found, length:', env.BREVO_API_KEY.length);

    // Parser les données du formulaire
    console.log('📝 Parsing form data...');
    let formData: ContactForm;
    try {
      formData = await request.json();
      console.log('✅ Form data parsed:', formData);
    } catch (parseError) {
      console.error('❌ Error parsing JSON:', parseError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Invalid JSON data received' 
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Validation des données requises
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      console.log('❌ Missing required fields:', {
        name: !!formData.name,
        email: !!formData.email,
        phone: !!formData.phone,
        service: !!formData.service
      });
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Missing required fields: name, email, phone, and service are required' 
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid email format' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Détecter la langue (par défaut français)
    const language = formData.language || 'fr';
    console.log('🌐 Language detected:', language);

    // Préparer les données pour Brevo
    const emailData: BrevoEmailData = {
      sender: {
        name: 'WorldLink Logistics',
        email: 'logisticsltdworldlink@gmail.com', // Utiliser un email vérifié pour les tests
      },
      to: [
        {
          email: 'Andriatsilavokevin@gmail.com', // Email de test comme demandé
          name: 'Kevin Andriatsilavo'
        }
      ],
      subject: language === 'en' 
        ? `New contact message - ${formData.service}`
        : `Nouveau message de contact - ${formData.service}`,
      htmlContent: generateHtmlEmail(formData, language),
      textContent: generateTextEmail(formData, language),
    };

    // Envoyer l'email via l'API Brevo
    console.log('📤 Sending email via Brevo API...');
    console.log('📧 Email data:', JSON.stringify(emailData, null, 2));
    
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': env.BREVO_API_KEY,
      },
      body: JSON.stringify(emailData),
    });

    console.log('📊 Brevo response status:', brevoResponse.status);
    console.log('📋 Brevo response headers:', Object.fromEntries(brevoResponse.headers.entries()));
    
    const brevoResult = await brevoResponse.json();
    console.log('📋 Brevo response body:', JSON.stringify(brevoResult, null, 2));

    if (!brevoResponse.ok) {
      console.error('❌ Brevo API error:', brevoResult);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: `Failed to send email: ${brevoResult.message || 'Unknown error'}`,
          details: brevoResult
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Vérifier si l'email a été accepté par Brevo
    if (!brevoResult.messageId) {
      console.warn('⚠️ No messageId returned by Brevo, email might not be sent');
    } else {
      console.log('✅ Email accepted by Brevo with messageId:', brevoResult.messageId);
    }

    // Succès
    const response: EmailResponse = {
      success: true,
      message: 'Email sent successfully',
      messageId: brevoResult.messageId,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

// Générer le contenu HTML de l'email
function generateHtmlEmail(formData: ContactForm, language: 'fr' | 'en' = 'fr'): string {
  const texts = language === 'en' ? {
    title: 'New Contact Message',
    subtitle: 'WorldLink Logistics - Contact Form',
    fullName: 'Full Name:',
    email: 'Email:',
    phone: 'Phone:',
    country: 'Country:',
    service: 'Requested Service:',
    message: 'Message:',
    footer: 'This message was sent from the WorldLink Logistics contact form',
    date: 'Date:'
  } : {
    title: 'Nouveau message de contact',
    subtitle: 'WorldLink Logistics - Formulaire de contact',
    fullName: 'Nom complet:',
    email: 'Email:',
    phone: 'Téléphone:',
    country: 'Pays:',
    service: 'Service demandé:',
    message: 'Message:',
    footer: 'Ce message a été envoyé depuis le formulaire de contact de WorldLink Logistics',
    date: 'Date:'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${texts.title} - WorldLink Logistics</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e3a8a, #0ea5e9); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e3a8a; display: block; margin-bottom: 5px; }
        .value { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; }
        .message { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; }
        .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${texts.title}</h1>
          <p>${texts.subtitle}</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">${texts.fullName}</span>
            <div class="value">${formData.name}</div>
          </div>
          
          <div class="field">
            <span class="label">${texts.email}</span>
            <div class="value">${formData.email}</div>
          </div>
          
          <div class="field">
            <span class="label">${texts.phone}</span>
            <div class="value">${formData.phone}</div>
          </div>
          
          ${formData.country ? `
          <div class="field">
            <span class="label">${texts.country}</span>
            <div class="value">${formData.country}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">${texts.service}</span>
            <div class="value">${formData.service}</div>
          </div>
          
          ${formData.message ? `
          <div class="field">
            <span class="label">${texts.message}</span>
            <div class="message">${formData.message.replace(/\n/g, '<br>')}</div>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>${texts.footer}</p>
          <p>${texts.date} ${new Date().toLocaleString(language === 'en' ? 'en-US' : 'fr-FR', { timeZone: 'Indian/Mauritius' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Générer le contenu texte de l'email
function generateTextEmail(formData: ContactForm, language: 'fr' | 'en' = 'fr'): string {
  const texts = language === 'en' ? {
    title: 'NEW CONTACT MESSAGE - WORLDLINK LOGISTICS',
    fullName: 'Full Name:',
    email: 'Email:',
    phone: 'Phone:',
    country: 'Country:',
    service: 'Requested Service:',
    message: 'Message:',
    footer: 'This message was sent from the WorldLink Logistics contact form',
    date: 'Date:'
  } : {
    title: 'NOUVEAU MESSAGE DE CONTACT - WORLDLINK LOGISTICS',
    fullName: 'Nom complet:',
    email: 'Email:',
    phone: 'Téléphone:',
    country: 'Pays:',
    service: 'Service demandé:',
    message: 'Message:',
    footer: 'Ce message a été envoyé depuis le formulaire de contact de WorldLink Logistics',
    date: 'Date:'
  };

  return `
${texts.title}

${texts.fullName} ${formData.name}
${texts.email} ${formData.email}
${texts.phone} ${formData.phone}
${formData.country ? `${texts.country} ${formData.country}` : ''}
${texts.service} ${formData.service}

${formData.message ? `${texts.message}\n${formData.message}\n` : ''}

---
${texts.footer}
${texts.date} ${new Date().toLocaleString(language === 'en' ? 'en-US' : 'fr-FR', { timeZone: 'Indian/Mauritius' })}
  `.trim();
}
