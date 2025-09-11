// Test détaillé de la fonction d'email pour diagnostiquer les problèmes de livraison
const testEmailDetailed = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    service: "Freight Consolidation & Full Container Loads",
    message: "Test de livraison d'email - " + new Date().toISOString()
  };

  try {
    console.log('🧪 Test détaillé de la fonction d\'envoi d\'email...');
    console.log('📧 Données de test:', testData);
    console.log('🕐 Timestamp:', new Date().toISOString());
    
    const response = await fetch('http://localhost:8788/api/send-email', {
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
          console.log('\n⚠️  === VÉRIFICATIONS À FAIRE ===');
          console.log('1. Vérifiez votre boîte de réception (et spam)');
          console.log('2. Vérifiez que l\'email expéditeur est vérifié dans Brevo');
          console.log('3. Vérifiez les logs Brevo pour voir si l\'email a été livré');
          console.log('4. Attendez quelques minutes (parfois il y a un délai)');
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

// Exécuter le test
testEmailDetailed();
