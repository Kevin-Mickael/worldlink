#!/usr/bin/env node

/**
 * Test script pour le formulaire de la page d'accueil
 * Ce script teste l'envoi d'email avec les données du formulaire de contact
 */

const testData = {
  name: "Jean Dupont",
  email: "jean.dupont@example.com",
  phone: "+33 1 23 45 67 89",
  service: "Air Freight",
  message: "Bonjour,\n\nJe souhaite obtenir des informations sur vos services de transport aérien pour un envoi vers Maurice.\n\nMerci pour votre retour.\n\nCordialement,\nJean Dupont",
  country: "France",
  language: "fr"
};

const testDataEn = {
  name: "John Smith",
  email: "john.smith@example.com",
  phone: "+1 555 123 4567",
  service: "Sea Freight",
  message: "Hello,\n\nI would like to get information about your sea freight services for a shipment to Mauritius.\n\nThank you for your response.\n\nBest regards,\nJohn Smith",
  country: "United States",
  language: "en"
};

console.log('🧪 Test du formulaire de la page d\'accueil');
console.log('📧 Données de test FR:', JSON.stringify(testData, null, 2));
console.log('📧 Données de test EN:', JSON.stringify(testDataEn, null, 2));

async function testHomeForm(data, language) {
  try {
    console.log(`\n📤 Envoi de la requête vers /api/send-email (${language.toUpperCase()})...`);
    
    const response = await fetch('http://localhost:8787/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('📊 Statut de la réponse:', response.status);
    console.log('📋 Headers de la réponse:', Object.fromEntries(response.headers.entries()));

    const result = await response.json();
    console.log('📋 Réponse complète:', JSON.stringify(result, null, 2));

    if (result.success) {
      console.log(`✅ Test réussi (${language.toUpperCase()}) ! Email envoyé avec succès`);
      console.log('📧 Message ID:', result.messageId);
    } else {
      console.log(`❌ Test échoué (${language.toUpperCase()}) ! Erreur:`, result.message);
      if (result.details) {
        console.log('🔍 Détails de l\'erreur:', result.details);
      }
    }

  } catch (error) {
    console.error(`❌ Erreur lors du test (${language.toUpperCase()}):`, error.message);
    console.error('💡 Assurez-vous que le serveur de développement est démarré sur le port 8787');
    console.error('💡 Utilisez: npm run dev ou wrangler dev');
  }
}

// Exécuter les tests
async function runTests() {
  console.log('🧪 Démarrage des tests multilingues...\n');
  
  // Test en français
  await testHomeForm(testData, 'fr');
  
  // Attendre un peu entre les tests
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Test en anglais
  await testHomeForm(testDataEn, 'en');
  
  console.log('\n✅ Tests terminés !');
}

runTests();
