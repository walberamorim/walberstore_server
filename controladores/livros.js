import { getTodosOsLivros, getLivroPorId, salvarLivro, atualizarLivro, deletarLivro, getLivrosPorEditora } from '../servicos/livros.js';
async function getLivros(req, res) {
    try {
        const livros = await getTodosOsLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getLivrosEditora(req, res) {
    try {
        const editora = req.query.editora;
        const livros = await getLivrosPorEditora(editora);
        res.send(livros);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getLivro(req, res) {
    try {
        const id = req.params.id;
        const livro = await getLivroPorId(id);
        res.send(livro);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function postLivro(req, res) {
    try {
        salvarLivro(req.body);
        res.send('Livro salvo com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function patchLivro(req, res) {
    try {
        const id = req.params.id;
        atualizarLivro(id, req.body);
        res.send('Livro atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        deletarLivro(id);
        res.send('Livro deletado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro,
    getLivrosEditora,
};
