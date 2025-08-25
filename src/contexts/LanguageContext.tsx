import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translation } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  translations: Translation;
  changeLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

const translations: Record<string, Translation> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      contact: 'Contact',
      faq: 'FAQ'
    },
    hero: {
      title: 'Votre guichet unique pour la logistique',
      subtitle: 'Fret aérien, fret maritime, douane et entreposage',
      description: 'Depuis près de 30 ans, nous orchestrons vos flux de bout en bout: transport, dédouanement, projets hors gabarit, périssables et dangereux, et solutions d\'entreposage.',
      cta: 'Nos Services',
      video: 'Regarder la Vidéo'
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Avec plus d\'une décennie d\'expertise, nous nous engageons à fournir des solutions logistiques efficaces, fiables et personnalisées pour les entreprises et particuliers du monde entier.',
      shipping: {
        title: 'Fret Aérien',
        description: 'Organisation et suivi de vos envois urgents partout dans le monde'
      },
      warehousing: {
        title: 'Entreposage',
        description: 'Stockage sécurisé, préparation de commandes et solutions flexibles'
      },
      inventory: {
        title: 'Dédouanement',
        description: 'Accompagnement complet en classification, conformité et formalités douanières'
      },
      delivery: {
        title: 'Projets & Hors Gabarit',
        description: 'Gestion de cargaisons spéciales avec planification et exécution sur mesure'
      },
      cfs: {
        title: 'Périssables & Dangereux',
        description: 'Permis, emballage, chaîne du froid et conditions de transport adaptées'
      }
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Partenaire logistique fiable et réactif',
      description: 'Depuis 1994, nous aidons les entreprises à chaque étape de leur chaîne logistique: fret aérien et maritime, formalités douanières, entreposage et solutions projets. Présence active à Maurice, Madagascar et en Afrique du Sud.',
      mission: 'Notre Mission',
      missionText: 'Simplifier la logistique avec des solutions fiables, transparentes et performantes.',
      vision: 'Notre Vision',
      visionText: 'Relier durablement les marchés d\'Afrique, d\'Asie et d\'Europe grâce à des services intégrés.'
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes là pour vous aider',
      description: 'Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets logistiques.',
      form: {
        name: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        service: 'Service demandé',
        message: 'Message (optionnel)',
        submit: 'Envoyer'
      },
      formTitle: 'Envoyez-nous un Message',
      successTitle: 'Message Envoyé!',
      successMessage: 'Nous vous répondrons dans les plus brefs délais.',
      selectService: 'Sélectionner un service',
      sending: 'Envoi en cours...',
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Heures d\'ouverture'
      },
      infoTitle: 'Informations de Contact',
      locationTitle: 'Notre Localisation',
      mapPlaceholder: 'Carte Interactive',
      quickContactTitle: 'Besoin d\'une Réponse Rapide?',
      quickContactDescription: 'Notre équipe est disponible par téléphone pour répondre immédiatement à vos questions urgentes.',
      callNow: 'Appelez Maintenant',
      sendEmail: 'Envoyez un Email'
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Trouvez rapidement les réponses à vos questions',
      description: 'Consultez les réponses aux questions les plus courantes ou contactez-nous pour une assistance personnalisée.',
      searchPlaceholder: 'Rechercher une question...',
      allCategories: 'Toutes',
      noResultsTitle: 'Aucune question trouvée',
      noResultsMessage: 'Essayez avec d\'autres mots-clés ou contactez-nous directement.',
      ctaTitle: 'Vous n\'avez pas trouvé votre réponse?',
      ctaDescription: 'Notre équipe d\'experts est là pour répondre à toutes vos questions spécifiques.',
      callUs: 'Nous Appeler',
      sendEmail: 'Envoyer un Email'
    },
    faqItems: {
      delivery: {
        question: 'Quels sont vos délais de livraison?',
        answer: 'Nos délais de livraison varient selon la destination et le type de service choisi. Pour les livraisons nationales, comptez 24-48h en express et 3-5 jours en standard. Pour l\'international, les délais sont de 3-7 jours selon la destination.',
        category: 'Livraison'
      },
      tracking: {
        question: 'Comment puis-je suivre mon envoi?',
        answer: 'Vous recevrez un numéro de suivi par email ou SMS dès l\'expédition de votre colis. Vous pouvez le saisir sur notre site web ou notre application mobile pour suivre votre envoi en temps réel.',
        category: 'Suivi'
      },
      warehousing: {
        question: 'Proposez-vous des services d\'entreposage?',
        answer: 'Oui, nous disposons d\'entrepôts sécurisés et climatisés. Nous offrons des solutions de stockage court et long terme avec système de gestion d\'inventaire avancé et accès 24/7.',
        category: 'Entreposage'
      },
      goods: {
        question: 'Quels types de marchandises acceptez-vous?',
        answer: 'Nous acceptons la plupart des marchandises légales, à l\'exception des matières dangereuses, produits périssables sans emballage approprié, et articles interdits par la réglementation internationale.',
        category: 'Marchandises'
      },
      pricing: {
        question: 'Comment sont calculés vos tarifs?',
        answer: 'Nos tarifs sont basés sur plusieurs facteurs : poids, dimensions, distance, type de service, et valeur déclarée. Nous offrons des tarifs préférentiels pour les clients réguliers et les gros volumes.',
        category: 'Tarification'
      },
      insurance: {
        question: 'Offrez-vous une assurance pour les envois?',
        answer: 'Oui, tous nos envois incluent une assurance de base. Vous pouvez souscrire une assurance complémentaire pour les marchandises de grande valeur. Notre équipe vous conseillera sur la meilleure option.',
        category: 'Assurance'
      },
      claims: {
        question: 'Que faire en cas de dommage ou de perte?',
        answer: 'En cas de dommage ou perte, contactez-nous immédiatement. Nous traiterons votre réclamation dans les 48h. Notre assurance couvrira les dommages selon les conditions générales.',
        category: 'Réclamations'
      },
      cfs: {
        question: 'Proposez-vous des services CFS?',
        answer: 'Oui, nous disposons d\'installations CFS (Container Freight Station) et d\'entrepôts sous douane. Nous gérons tous les aspects douaniers et documentaires pour vos imports/exports.',
        category: 'Services CFS'
      },
      support: {
        question: 'Comment contacter le service client?',
        answer: 'Notre service client est disponible par téléphone au +1 (555) 123-4567, par email à info@logiflow.com, ou via notre chat en ligne. Nos horaires sont du lundi au vendredi de 8h à 18h.',
        category: 'Support'
      },
      solutions: {
        question: 'Proposez-vous des solutions personnalisées?',
        answer: 'Absolument! Nous développons des solutions logistiques sur mesure selon vos besoins spécifiques. Contactez notre équipe commerciale pour discuter de vos exigences particulières.',
        category: 'Solutions'
      }
    },
    footer: {
      company: 'WorldLink Logistics',
      description: 'Votre partenaire de confiance pour le fret, la douane et l\'entreposage.',
      links: 'Liens Rapides',
      contact: 'Contact',
      rights: 'Tous droits réservés.'
    },
    chat: {
      title: 'Support Client',
      placeholder: 'Tapez votre message...',
      send: 'Envoyer',
      welcome: 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
      offline: 'Nos agents sont actuellement hors ligne. Laissez un message et nous vous répondrons bientôt.'
    },
    stats: {
      years: "Années d'expérience",
      services: 'Services offerts',
      countries: 'Pays de présence',
      support: 'Assistance dédiée'
    },
    cta: {
      title: 'Prêt à Optimiser Votre Logistique?',
      description: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins logistiques et découvrir comment nous pouvons vous aider.',
      button: 'Contactez-Nous',
      servicesButton: 'Voir Tous les Services'
    },
    values: {
      title: 'Nos Valeurs',
      subtitle: 'Les valeurs qui guident notre travail quotidien et nos relations avec nos clients.',
      reliability: {
        title: 'Fiabilité',
        description: 'Nous nous engageons à fournir des services fiables et sécurisés à tous nos clients.'
      },
      customerService: {
        title: 'Service Client',
        description: 'Notre équipe dédiée est disponible 24/7 pour répondre à tous vos besoins.'
      },
      globalNetwork: {
        title: 'Réseau Global',
        description: 'Un réseau mondial de partenaires pour des solutions logistiques complètes.'
      },
      excellence: {
        title: 'Excellence',
        description: 'Nous visons l\'excellence dans chaque aspect de nos services logistiques.'
      }
    },
    team: {
      title: 'Notre Équipe',
      subtitle: 'Rencontrez les experts dédiés qui rendent nos services logistiques exceptionnels.',
      ceo: 'Directeur Général',
      operations: 'Directrice des Opérations',
      logistics: 'Responsable Logistique',
      customerSupport: 'Service Client'
    },
    achievements: {
      title: 'Nos Réalisations',
      subtitle: 'Des chiffres qui témoignent de notre expertise et de votre confiance.',
      experience: 'Années d\'Expérience',
      countries: 'Pays Desservis',
      packages: 'Colis Expédiés'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      faq: 'FAQ'
    },
    hero: {
      title: 'Your one-stop partner for logistics',
      subtitle: 'Air freight, ocean freight, customs and warehousing',
      description: 'For nearly three decades, we orchestrate end-to-end flows: transport, customs clearance, project cargo, perishables and dangerous goods, and flexible warehousing.',
      cta: 'Our Services',
      video: 'Watch Video'
    },
    services: {
      title: 'Our Services',
      subtitle: 'With more than a decade of expertise, we are committed to delivering efficient, reliable, and tailored logistics solutions for businesses and individuals worldwide.',
      shipping: {
        title: 'Air Freight',
        description: 'Time-critical shipments arranged and monitored worldwide'
      },
      warehousing: {
        title: 'Warehousing',
        description: 'Secure storage, order preparation and flexible capacity'
      },
      inventory: {
        title: 'Customs Clearing',
        description: 'End-to-end support for classification, compliance and clearance'
      },
      delivery: {
        title: 'Project Cargo',
        description: 'Out-of-gauge and heavy-lift moves with tailored engineering'
      },
      cfs: {
        title: 'Perishables & Dangerous Goods',
        description: 'Permits, packaging, cold chain and special freight conditions'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Reliable and responsive logistics partner',
      description: 'Established in 1994, we support businesses across the supply chain: air and ocean freight, customs formalities, warehousing and project solutions. Active presence in Mauritius, Madagascar and South Africa.',
      mission: 'Our Mission',
      missionText: 'Simplify logistics through reliable, transparent and high-performance solutions.',
      vision: 'Our Vision',
      visionText: 'Sustainably connect African, Asian and European markets with integrated services.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help',
      description: 'Our team is available to answer all your questions and support you in your logistics projects.',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Service Requested',
        message: 'Message (optional)',
        submit: 'Send'
      },
      formTitle: 'Send Us a Message',
      successTitle: 'Message Sent!',
      successMessage: 'We will get back to you as soon as possible.',
      selectService: 'Select a service',
      sending: 'Sending...',
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Business Hours'
      },
      infoTitle: 'Contact Information',
      locationTitle: 'Our Location',
      mapPlaceholder: 'Interactive Map',
      quickContactTitle: 'Need a Quick Response?',
      quickContactDescription: 'Our team is available by phone to immediately answer your urgent questions.',
      callNow: 'Call Now',
      sendEmail: 'Send Email'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find quick answers to your questions',
      description: 'Check the answers to the most common questions or contact us for personalized assistance.',
      searchPlaceholder: 'Search for a question...',
      allCategories: 'All',
      noResultsTitle: 'No questions found',
      noResultsMessage: 'Try with other keywords or contact us directly.',
      ctaTitle: 'Haven\'t found your answer?',
      ctaDescription: 'Our team of experts is here to answer all your specific questions.',
      callUs: 'Call Us',
      sendEmail: 'Send Email'
    },
    faqItems: {
      delivery: {
        question: 'What are your delivery times?',
        answer: 'Our delivery times vary depending on the destination and type of service chosen. For domestic deliveries, count 24-48h for express and 3-5 days for standard. For international, delivery times are 3-7 days depending on the destination.',
        category: 'Delivery'
      },
      tracking: {
        question: 'How can I track my shipment?',
        answer: 'You will receive a tracking number by email or SMS as soon as your package is shipped. You can enter it on our website or mobile app to track your shipment in real time.',
        category: 'Tracking'
      },
      warehousing: {
        question: 'Do you offer warehousing services?',
        answer: 'Yes, we have secure and climate-controlled warehouses. We offer short and long-term storage solutions with advanced inventory management system and 24/7 access.',
        category: 'Warehousing'
      },
      goods: {
        question: 'What types of goods do you accept?',
        answer: 'We accept most legal goods, except dangerous materials, perishable products without appropriate packaging, and items prohibited by international regulations.',
        category: 'Goods'
      },
      pricing: {
        question: 'How are your rates calculated?',
        answer: 'Our rates are based on several factors: weight, dimensions, distance, type of service, and declared value. We offer preferential rates for regular customers and large volumes.',
        category: 'Pricing'
      },
      insurance: {
        question: 'Do you offer insurance for shipments?',
        answer: 'Yes, all our shipments include basic insurance. You can subscribe to additional insurance for high-value goods. Our team will advise you on the best option.',
        category: 'Insurance'
      },
      claims: {
        question: 'What to do in case of damage or loss?',
        answer: 'In case of damage or loss, contact us immediately. We will process your claim within 48 hours. Our insurance will cover damages according to general conditions.',
        category: 'Claims'
      },
      cfs: {
        question: 'Do you offer CFS services?',
        answer: 'Yes, we have CFS (Container Freight Station) facilities and customs warehouses. We handle all customs and documentary aspects for your imports/exports.',
        category: 'CFS Services'
      },
      support: {
        question: 'How to contact customer service?',
        answer: 'Our customer service is available by phone at +1 (555) 123-4567, by email at info@logiflow.com, or via our online chat. Our hours are Monday to Friday from 8am to 6pm.',
        category: 'Support'
      },
      solutions: {
        question: 'Do you offer customized solutions?',
        answer: 'Absolutely! We develop custom logistics solutions according to your specific needs. Contact our sales team to discuss your particular requirements.',
        category: 'Solutions'
      }
    },
    footer: {
      company: 'WorldLink Logistics',
      description: 'Your trusted partner for freight, customs and warehousing.',
      links: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.'
    },
    chat: {
      title: 'Customer Support',
      placeholder: 'Type your message...',
      send: 'Send',
      welcome: 'Hello! How can I help you today?',
      offline: 'Our agents are currently offline. Leave a message and we\'ll get back to you soon.'
    },
    stats: {
      years: 'Years of Experience',
      services: 'Services Offered',
      countries: 'Countries of Presence',
      support: 'Dedicated Support'
    },
    cta: {
      title: 'Ready to Optimize Your Logistics?',
      description: 'Contact us today to discuss your logistics needs and discover how we can help you.',
      button: 'Contact Us',
      servicesButton: 'View All Services'
    },
    values: {
      title: 'Our Values',
      subtitle: 'The values that guide our daily work and relationships with our clients.',
      reliability: {
        title: 'Reliability',
        description: 'We are committed to providing reliable and secure services to all our clients.'
      },
      customerService: {
        title: 'Customer Service',
        description: 'Our dedicated team is available 24/7 to meet all your needs.'
      },
      globalNetwork: {
        title: 'Global Network',
        description: 'A worldwide network of partners for comprehensive logistics solutions.'
      },
      excellence: {
        title: 'Excellence',
        description: 'We strive for excellence in every aspect of our logistics services.'
      }
    },
    team: {
      title: 'Our Team',
      subtitle: 'Meet the dedicated experts who make our logistics services exceptional.',
      ceo: 'Chief Executive Officer',
      operations: 'Operations Director',
      logistics: 'Logistics Manager',
      customerSupport: 'Customer Support'
    },
    achievements: {
      title: 'Our Achievements',
      subtitle: 'Numbers that demonstrate our expertise and your trust.',
      experience: 'Years of Experience',
      countries: 'Countries Served',
      packages: 'Packages Shipped'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const savedLanguageCode = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
      const defaultLanguage = languages.find(lang => lang.code === 'en') || languages[0];
      if (savedLanguageCode) {
        const savedLanguage = languages.find(lang => lang.code === savedLanguageCode);
        return savedLanguage || defaultLanguage;
      }
      return defaultLanguage;
    } catch {
      return languages.find(lang => lang.code === 'en') || languages[0];
    }
  });

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', language.code);
      }
    } catch {
      // Ignore persistence errors
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage.code];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      translations: translations[currentLanguage.code],
      changeLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languages };