// Test de la fonction d'email en production
// Remplacez 'votre-domaine.com' par votre vrai domaine Cloudflare Pages

const testProductionEmail = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    service: "Freight Consolidation & Full Container Loads",
    message: "Test de livraison d'email - " + new Date().toISOString()
  };

  // Remplacez par votre vrai domaine
  const baseUrl = 'https://votre-domaine.pages.dev'; // ou votre domaine personnalisé
  
  try {
    console.log('🧪 Test de la fonction d\'envoi d\'email en production...');
    console.log('📧 Données de test:', testData);
    console.log('🌐 URL:', `${baseUrl}/api/send-email`);
    console.log('🕐 Timestamp:', new Date().toISOString());
    
    const response = await fetch(`${baseUrl}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('\n📊 === RÉPONSE DU SERVEUR ===');
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('\n📄 === CONTENU DE LA RÉPONSE ===');
    console.log(responseText);

    if (response.ok) {
      try {
        const result = JSON.parse(responseText);
        console.log('\n✅ === RÉSULTAT PARSÉ ===');
        console.log('Success:', result.success);
        console.log('Message:', result.message);
        console.log('Message ID:', result.messageId);
        
        if (result.success) {
          console.log('\n🎉 === EMAIL ENVOYÉ AVEC SUCCÈS ===');
          console.log('✅ L\'API a accepté l\'email');
          console.log('📧 Message ID:', result.messageId);
          console.log('\n⚠️  === PROCHAINES ÉTAPES ===');
          console.log('1. Vérifiez votre boîte de réception (et spam)');
          console.log('2. Connectez-vous à Brevo pour voir les logs');
          console.log('3. Vérifiez que l\'email expéditeur est vérifié');
          console.log('4. Attendez quelques minutes (délai possible)');
        }
      } catch (jsonError) {
        console.error('❌ Erreur de parsing JSON:', jsonError);
      }
    } else {
      console.error('\n❌ === ERREUR HTTP ===');
      console.error('Status:', response.status);
      console.error('Réponse:', responseText);
    }

  } catch (error) {
    console.error('\n❌ === ERREUR DE RÉSEAU ===');
    console.error('Erreur:', error.message);
  }
};

// Instructions d'utilisation
console.log('📋 === INSTRUCTIONS ===');
console.log('1. Remplacez "votre-domaine.pages.dev" par votre vrai domaine');
console.log('2. Exécutez: node test-production-email.js');
console.log('3. Vérifiez les logs dans Cloudflare Pages Functions');
console.log('4. Vérifiez les logs dans Brevo Dashboard');
console.log('');

// Décommentez la ligne suivante pour exécuter le test
// testProductionEmail();
