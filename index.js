const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, seja bem vindo e aproveite as rotas deste site, que estão descritas na README do repositório no GitHub');
});

app.get('/ola/:nome', (req, res) => {
    const nome = req.params.nome
    res.send(`Olá, ${nome}! Uau, que nome bonito!!`)
});

app.get('/boa-noite/:nome', (req, res) => {
    const nome = req.params.nome
    const hora = new Date().getHours();

    let saudacao = hora >= 6 && hora < 18 ? 'Bom dia' : 'Boa noite';
    res.send(`${saudacao}, ${nome}! Que nome lindo!`);
})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});