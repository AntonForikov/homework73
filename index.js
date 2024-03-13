const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;

const password = 'password';

app.get('/:hello', (req, res) => {
    res.send(`${req.params.hello}`);
});

app.get('/encode/:target', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.target));
});

app.get('/decode/:target', (req,res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.target));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});