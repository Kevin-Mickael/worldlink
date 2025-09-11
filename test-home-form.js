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

console.log('🧪 Test du formulaire de la page d\'accueil');
console.log('📧 Données de test:', JSON.stringify(testData, null, 2));

async function testHomeForm() {
  try {
    console.log('\n📤 Envoi de la requête vers /api/send-email...');
    
    const response = await fetch('http://localhost:8787/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Statut de la réponse:', response.status);
    console.log('📋 Headers de la réponse:', Object.fromEntries(response.headers.entries()));

    const result = await response.json();
    console.log('📋 Réponse complète:', JSON.stringify(result, null, 2));

    if (result.success) {
      console.log('✅ Test réussi ! Email envoyé avec succès');
      console.log('📧 Message ID:', result.messageId);
    } else {
      console.log('❌ Test échoué ! Erreur:', result.message);
      if (result.details) {
        console.log('🔍 Détails de l\'erreur:', result.details);
      }
    }

  } catch (error) {
    console.error('❌ Erreur lors du test:', error.message);
    console.error('💡 Assurez-vous que le serveur de développement est démarré sur le port 8787');
    console.error('💡 Utilisez: npm run dev ou wrangler dev');
  }
}

// Exécuter le test
testHomeForm();
