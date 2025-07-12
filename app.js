const express = require('express');
const rotaLivros = require('./rotas/livros');
const app = express();
const port = 8000;

app.use('/livros', rotaLivros);

app.listen(port, () => {
    console.log(`Exemplo rodando no http://localhost:${port}`);
});