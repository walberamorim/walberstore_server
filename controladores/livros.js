const {getTodosOsLivros, getLivroPorId, salvarLivro, atualizarLivro, deletarLivro} = require('../servicos/livros');
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

function postLivro(req, res) {
    try {
        salvarLivro(req.body);
        res.send('Livro salvo com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

function patchLivro(req, res) {
    try {
        atualizarLivro(req.params.id, req.body);
        res.send('Livro atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

function deleteLivro(req, res) {
    try {
        deletarLivro(req.params.id);
        res.send('Livro deletado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro,
}
