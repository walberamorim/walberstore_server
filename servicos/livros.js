const fs = require('fs');

function getTodosOsLivros() {
    return JSON.parse(fs.readFileSync('livros.json'));
}

function getLivroPorId(id) {
    const livros = getTodosOsLivros();
    return livros.find(livro => livro.id === id);
}

function salvarLivro(livro) {
    const livros = getTodosOsLivros();
    console.log("Livro a ser salvo: ", livro);
    livro.id = (livros.length + 1).toString();
    livros.push(livro);
    fs.writeFileSync('livros.json', JSON.stringify(livros));
}

function atualizarLivro(id, livro) {
    const livros = getTodosOsLivros();
    const index = livros.findIndex(livro => livro.id === id);
    const livroModificado = {...livros[index], ...livro};
    livros[index] = livroModificado;
    fs.writeFileSync('livros.json', JSON.stringify(livros));
}

function deletarLivro(id) {
    const livros = getTodosOsLivros();
    const index = livros.findIndex(livro => livro.id === id);
    livros.splice(index, 1);
    fs.writeFileSync('livros.json', JSON.stringify(livros));
}

module.exports = {
    getTodosOsLivros,
    getLivroPorId,
    salvarLivro,
    atualizarLivro,
    deletarLivro,
}