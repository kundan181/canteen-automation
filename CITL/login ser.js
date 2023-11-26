// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory (CSS, images, etc.)
app.use(express.static('public'));

// Route for handling login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Perform validation logic here (replace this with your actual validation code)
    // For example, you can check the credentials against a database
    // If valid credentials, send a success response, otherwise, send an error response
    if (email === 'validEmail@example.com' && password === 'validPassword') {
        res.send('Login successful'); // Replace this with your success response
    } else {
        res.status(401).send('Invalid credentials'); // Replace this with your error response
    }
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
