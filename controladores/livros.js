const { getTodosOsLivros, getLivroPorId, salvarLivro, atualizarLivro, deletarLivro } = require('../servicos/livros');
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
        const id = Number(req.params.id);
        if (!id || Number.isNaN(id)) {
            return res.status(422).send('Id do livro deve ser um número válido');
        }
        const livro = getLivroPorId(id);
        res.send(livro);
    } catch (error) {
        res.status(500).send(error);
    }
}

function postLivro(req, res) {
    try {
        if (!req.body.nome) {
            return res.status(422).send('O nome do livro deve ser informado');
        }
        salvarLivro(req.body);
        res.send('Livro salvo com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

function patchLivro(req, res) {
    try {
        const id = Number(req.params.id);
        if (!id || Number.isNaN(id)) {
            return res.status(422).send('Id do livro deve ser um número válido');
        }
        atualizarLivro(id, req.body);
        res.send('Livro atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

function deleteLivro(req, res) {
    try {
        const id = Number(req.params.id);
        if (!id || Number.isNaN(id)) {
            return res.status(422).send('Id do livro deve ser um número válido');
        }
        deletarLivro(id);
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
