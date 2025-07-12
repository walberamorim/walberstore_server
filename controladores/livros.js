const { getTodosOsLivros, getLivroPorId, salvarLivro, atualizarLivro, deletarLivro } = require('../servicos/livros');
async function getLivros(req, res) {
    try {
        const livros = await getTodosOsLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getLivro(req, res) {
    try {
        const id = Number(req.params.id);
        const livro = await getLivroPorId(id);
        if (!livro) {
            return res.status(404).send('Livro nao encontrado');
        }
        res.send(livro);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function postLivro(req, res) {
    try {
        const livro = await salvarLivro(req.body);
        res.status(201).send('Livro salvo com sucesso! ID: ' + livro.id);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function patchLivro(req, res) {
    try {
        const id = Number(req.params.id);
        const livro = await atualizarLivro(id, req.body);
        res.send('Livro atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

function deleteLivro(req, res) {
    try {
        const id = Number(req.params.id);
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
