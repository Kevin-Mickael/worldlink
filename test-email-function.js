// Script de test pour la fonction d'envoi d'email
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
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Status de la réponse:', response.status);
    console.log('📋 Headers de la réponse:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Erreur HTTP:', response.status, errorText);
      return;
    }

    const result = await response.json();
    console.log('✅ Résultat:', result);

    if (result.success) {
      console.log('🎉 Email envoyé avec succès!');
      console.log('📧 Message ID:', result.messageId);
    } else {
      console.error('❌ Échec de l\'envoi:', result.message);
    }

  } catch (error) {
    console.error('❌ Erreur lors du test:', error);
  }
};

// Exécuter le test si le script est appelé directement
if (typeof window !== 'undefined') {
  // Dans le navigateur
  console.log('Pour tester la fonction d\'email, ouvrez la console du navigateur et exécutez:');
  console.log('testEmailFunction()');
  window.testEmailFunction = testEmailFunction;
} else {
  // Dans Node.js (si vous voulez tester en local)
  testEmailFunction();
}
