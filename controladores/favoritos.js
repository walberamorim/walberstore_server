const { 
    getTodosOsFavoritos, 
    getFavoritoPorId,
    salvarFavorito,
    deletarFavorito 
} = require('../servicos/favoritos');
const { getLivroPorId } = require('../servicos/livros');

async function getFavoritos(req, res) {
    try {
        const favoritos = await getTodosOsFavoritos();
        res.send(favoritos);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getFavorito(req, res) {
    try {
        const id = Number(req.params.id);
        if (!id || Number.isNaN(id)) {
            return res.status(422).send('Id do favorito deve ser um número válido');
        }
        const favorito = await getFavoritoPorId(id);
        if (!favorito) {
            return res.status(404).send('Favorito não encontrado');
        }
        res.send(favorito);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function postFavorito(req, res) {
    try {
        const id = req.params.id;
        const livro = await getLivroPorId(id);
        const favoritoSalvo = await salvarFavorito(livro);
        res.status(201).send('Favorito salvo com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteFavorito(req, res) {
    try {
        const id = Number(req.params.id);
        await deletarFavorito(id);
        res.send('Favorito deletado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getFavoritos,
    getFavorito,
    postFavorito,
    deleteFavorito,
}