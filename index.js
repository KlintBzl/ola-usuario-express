const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, mundo! Meu primeiro projeto com Node.js e Express.');
});

app.get('/ola/:nome', (req, res) => {
    const nome = req.params.nome
    res.send(`Olá, ${nome}! Uau, que nome bonito!!`)
});

app.get('/boa-noite/:nome', (req, res) => {
    const nome = req.params.nome
    const hora = new Date().getHours();
    
    let saudacao = hora >= 6 && hora < 18 ? 'Bom dia' : 'Boa noite';
  res.send(`${saudacao}, ${nome}!`);
})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});