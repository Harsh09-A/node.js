const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, this is the root of the API');
});

app.get('/example', (req, res) => {
    res.json({ message: 'This is an example API endpoint' });
});

app.listen(3000, () => {
    console.log('API listening on port 3000');
});