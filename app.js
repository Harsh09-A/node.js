const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, this is the root path of the API');
});

app.get('/example', (req, res) => {
    res.json({ message: 'This is an example API endpoint' });
});

app.post('/example', (req, res) => {
    const { name, description } = req.body;
    res.json({ id: 1, name, description });
});

app.listen(3000, () => {
    console.log('API listening on port 3000');
});