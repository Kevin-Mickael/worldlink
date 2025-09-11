// Test de la fonction d'email en local avec Wrangler
const testEmailFunction = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    service: "Freight Consolidation & Full Container Loads",
    message: "Ceci est un message de test pour vérifier le fonctionnement de l'API d'envoi d'email."
  };

  try {
    console.log('🧪 Test de la fonction d\'envoi d\'email...');
    console.log('📧 Données de test:', testData);
    
    const response = await fetch('http://localhost:8788/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Status de la réponse:', response.status);
    console.log('📋 Headers de la réponse:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('📄 Contenu de la réponse:', responseText);

    if (!response.ok) {
      console.error('❌ Erreur HTTP:', response.status, responseText);
      return;
    }

    try {
      const result = JSON.parse(responseText);
      console.log('✅ Résultat JSON:', result);

      if (result.success) {
        console.log('🎉 Email envoyé avec succès!');
        console.log('📧 Message ID:', result.messageId);
      } else {
        console.error('❌ Échec de l\'envoi:', result.message);
      }
    } catch (jsonError) {
      console.error('❌ Erreur de parsing JSON:', jsonError);
      console.log('📄 Réponse brute:', responseText);
    }

  } catch (error) {
    console.error('❌ Erreur lors du test:', error);
  }
};

// Exécuter le test
testEmailFunction();
