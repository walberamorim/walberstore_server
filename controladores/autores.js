const { getTodosOsAutores,
    getAutorPorId,
    salvarAutor,
    atualizarAutor,
    deletarAutor } = require('../servicos/autores');

async function getAutores(req, res) {
    try {
        const autores = await getTodosOsAutores();
        res.send(autores);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getAutor(req, res) {
    try {
        const id = Number(req.params.id);
        const autor = await getAutorPorId(id);
        if (!autor) {
            return res.status(404).send('Autor não encontrado');
        }
        res.send(autor);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function postAutor(req, res) {
    try {
        const autor = await salvarAutor(req.body);
        res.status(201).send('Autor salvo com sucesso! ID: ' + autor.id);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function patchAutor(req, res) {
    try {
        const id = Number(req.params.id);
        await atualizarAutor(id, req.body);
        res.send('Autor atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

function deleteAutor(req, res) {
    try {
        const id = Number(req.params.id);
        deletarAutor(id);
        res.send('Autor deletado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getAutores,
    getAutor,
    postAutor,
    patchAutor,
    deleteAutor,
}