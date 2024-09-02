// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for GET requests to the root
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
    console.log("ewtrgy");
});