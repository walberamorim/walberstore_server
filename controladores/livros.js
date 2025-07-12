const {getTodosOsLivros} = require('../servicos/livros');
function getLivros(req, res) {
    try {
        const livros = getTodosOsLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getLivros
}
