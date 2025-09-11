// Test simple de la fonction d'email en local
const testData = {
  name: "Test User",
  email: "test@example.com", 
  phone: "1234567890",
  service: "Freight Consolidation & Full Container Loads",
  message: "Ceci est un message de test pour vérifier le fonctionnement de l'API d'envoi d'email."
};

console.log('🧪 Test de la fonction d\'envoi d\'email...');
console.log('📧 Données de test:', testData);

fetch('/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
.then(response => {
  console.log('📊 Status de la réponse:', response.status);
  return response.json();
})
.then(result => {
  console.log('✅ Résultat:', result);
  if (result.success) {
    console.log('🎉 Email envoyé avec succès!');
  } else {
    console.error('❌ Échec de l\'envoi:', result.message);
  }
})
.catch(error => {
  console.error('❌ Erreur lors du test:', error);
});
