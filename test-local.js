// Test simple pour vérifier la fonction localement
const testData = {
  name: "Test User",
  email: "test@example.com", 
  phone: "+230 12345678",
  service: "Freight Consolidation & Full Container Loads",
  message: "Test message"
};

console.log('🧪 Test de la fonction serverless...');
console.log('📧 Données:', testData);

fetch('http://localhost:8788/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
.then(response => {
  console.log('📊 Status:', response.status);
  console.log('📋 Headers:', Object.fromEntries(response.headers.entries()));
  return response.text();
})
.then(text => {
  console.log('📄 Response body:', text);
  try {
    const json = JSON.parse(text);
    console.log('✅ JSON parsed:', json);
  } catch (e) {
    console.log('❌ Not valid JSON:', e.message);
  }
})
.catch(error => {
  console.error('💥 Error:', error);
});
