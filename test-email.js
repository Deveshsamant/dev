// Use the built-in fetch API (Node.js 18+)
// If using Node.js < 18, uncomment the line below and install node-fetch
// const fetch = require('node-fetch');

async function testEmail() {
  try {
    console.log('Sending test email...');
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message from the portfolio contact form.'
      }),
    });

    console.log('Response status:', response.status);
    const result = await response.json();
    console.log('Response:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

testEmail();