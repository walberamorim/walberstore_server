const {getTodosOsLivros, getLivroPorId} = require('../servicos/livros');
function getLivros(req, res) {
    try {
        const livros = getTodosOsLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error);
    }
}

function getLivro(req, res) {
    try {
        const livro = getLivroPorId(req.params.id);
        res.send(livro);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getLivros,
    getLivro
}
