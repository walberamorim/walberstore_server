const fs = require('fs');

function getTodosOsLivros() {
    return JSON.parse(fs.readFileSync('livros.json'));
}

module.exports = {
    getTodosOsLivros
}