const fs = require('fs');

function getTodosOsFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'));
}

function getFavoritoPorId(id) {
    const favoritos = getTodosOsFavoritos();
    return favoritos.find(favorito => favorito.id === id);
}

function salvarFavorito(favorito) {
    const favoritos = getTodosOsFavoritos();
    favoritos.push(favorito);
    fs.writeFileSync('favoritos.json', JSON.stringify(favoritos));
}

function atualizarFavorito(id, favorito) {
    const favoritos = getTodosOsFavoritos();
    const index = favoritos.findIndex(fav => fav.id === id);
    const favoritoModificado = { ...favoritos[index], ...favorito };
    favoritos[index] = favoritoModificado;
    fs.writeFileSync('favoritos.json', JSON.stringify(favoritos));
}

function deletarFavorito(id) {
    const favoritos = getTodosOsFavoritos();
    const index = favoritos.findIndex(fav => fav.id === id);
    favoritos.splice(index, 1);
    fs.writeFileSync('favoritos.json', JSON.stringify(favoritos));
}

module.exports = {
    getTodosOsFavoritos,
    getFavoritoPorId,
    salvarFavorito,
    atualizarFavorito,
    deletarFavorito,
}