const express = require('express');
const rotaLivros = require('./rotas/livros');
const app = express();
app.use(express.json());
const port = 8000;

app.use('/livros', rotaLivros);

app.listen(port, () => {
    console.log(`Exemplo rodando no http://localhost:${port}`);
});