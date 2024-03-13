const express = require('express');
const app = express();
const port = 8000;

const password = 'password';

app.get('/:hello', (req, res) => {
    res.send(`${req.params.hello}`);
});

app.get('/encode/:target', (req, res) => {

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});