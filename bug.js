const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// In a separate file (e.g., another route handler or test):

const request = require('request');
request('http://localhost:3000', (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Response:', body);
  }
});

//The problem is that if the server takes more than the request timeout time to respond, the request will fail. 