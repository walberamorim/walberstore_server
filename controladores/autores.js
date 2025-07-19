import { getTodosOsAutores, getAutorPorId, salvarAutor, atualizarAutor, deletarAutor } from '../servicos/autores.js';

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
        const id = req.params.id;
        const autor = await getAutorPorId(id);
        res.send(autor);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function postAutor(req, res) {
    try {
        await salvarAutor(req.body);
        res.send('Autor salvo com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function patchAutor(req, res) {
    try {
        const id = req.params.id;
        await atualizarAutor(id, req.body);
        res.send('Autor atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteAutor(req, res) {
    try {
        const id = req.params.id;
        await deletarAutor(id);
        res.send('Autor deletado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    getAutores,
    getAutor,
    postAutor,
    patchAutor,
    deleteAutor
}