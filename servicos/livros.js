const fs = require('fs');

function getTodosOsLivros() {
    return JSON.parse(fs.readFileSync('livros.json'));
}

function getLivroPorId(id) {
    const livros = getTodosOsLivros();
    return livros.find(livro => livro.id === id);
}

module.exports = {
    getTodosOsLivros,
    getLivroPorId
}