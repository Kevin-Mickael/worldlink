// Script pour vérifier la configuration Brevo
// Ce script vous aide à diagnostiquer pourquoi les emails ne sont pas reçus

const checkBrevoSetup = () => {
  console.log('🔍 === VÉRIFICATION DE LA CONFIGURATION BREVO ===\n');
  
  console.log('📋 === ÉTAPES DE VÉRIFICATION ===\n');
  
  console.log('1. 🔑 VÉRIFIEZ VOTRE CLÉ API BREVO');
  console.log('   - Allez sur https://app.brevo.com/');
  console.log('   - Settings > SMTP & API > API Keys');
  console.log('   - Vérifiez que votre clé API est active');
  console.log('   - Vérifiez que la clé a les permissions d\'envoi d\'email\n');
  
  console.log('2. 📧 VÉRIFIEZ L\'EMAIL EXPÉDITEUR');
  console.log('   - Settings > SMTP & API > Senders');
  console.log('   - Vérifiez que "Andriatsilavokevin@gmail.com" est dans la liste');
  console.log('   - Si ce n\'est pas le cas, ajoutez-le et vérifiez-le');
  console.log('   - L\'email doit avoir le statut "Verified"\n');
  
  console.log('3. 📊 VÉRIFIEZ LES LOGS D\'ENVOI');
  console.log('   - Campaigns > Email > Logs');
  console.log('   - Cherchez les emails envoyés récemment');
  console.log('   - Vérifiez le statut : "Delivered", "Bounced", "Blocked", etc.\n');
  
  console.log('4. 🚫 VÉRIFIEZ LES LIMITES');
  console.log('   - Settings > Account');
  console.log('   - Vérifiez que vous n\'avez pas atteint vos limites d\'envoi');
  console.log('   - Vérifiez que votre compte n\'est pas suspendu\n');
  
  console.log('5. 🌐 VÉRIFIEZ LA RÉPUTATION');
  console.log('   - Settings > SMTP & API > Senders');
  console.log('   - Vérifiez la réputation de votre adresse email');
  console.log('   - Si elle est faible, cela peut causer des blocages\n');
  
  console.log('🔧 === SOLUTIONS RECOMMANDÉES ===\n');
  
  console.log('✅ SOLUTION 1: Utiliser un email vérifié');
  console.log('   - Ajoutez "Andriatsilavokevin@gmail.com" comme expéditeur dans Brevo');
  console.log('   - Vérifiez l\'email via le lien envoyé par Brevo');
  console.log('   - Attendez que la vérification soit effective\n');
  
  console.log('✅ SOLUTION 2: Utiliser un domaine personnalisé');
  console.log('   - Configurez votre domaine "worldlink.mu" dans Brevo');
  console.log('   - Ajoutez les enregistrements DNS requis');
  console.log('   - Utilisez "noreply@worldlink.mu" comme expéditeur\n');
  
  console.log('✅ SOLUTION 3: Vérifier les logs détaillés');
  console.log('   - Dans Cloudflare Pages, allez dans Functions > Logs');
  console.log('   - Cherchez les logs de votre fonction send-email');
  console.log('   - Vérifiez les détails de la réponse Brevo\n');
  
  console.log('🧪 === TEST RECOMMANDÉ ===\n');
  console.log('1. Déployez votre site avec les corrections');
  console.log('2. Testez le formulaire de contact');
  console.log('3. Vérifiez les logs dans Cloudflare Pages');
  console.log('4. Vérifiez les logs dans Brevo Dashboard');
  console.log('5. Attendez 5-15 minutes pour la livraison\n');
  
  console.log('📞 === AIDE SUPPLÉMENTAIRE ===\n');
  console.log('Si le problème persiste :');
  console.log('- Contactez le support Brevo');
  console.log('- Vérifiez les logs détaillés de votre fonction');
  console.log('- Testez avec un autre email destinataire');
  console.log('- Vérifiez que votre IP n\'est pas blacklistée');
};

// Exécuter la vérification
checkBrevoSetup();
