import { 
    getTodosOsFavoritos, 
    getFavoritoPorId, 
    salvarFavorito,
    deletarFavorito 
} from '../servicos/favoritos.js';

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
        const id = req.params.id;
        const favorito = await getFavoritoPorId(id);
        res.send(favorito);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function postFavorito(req, res) {
    try {
        const id = req.params.id;
        console.log('id: ',id);
        await salvarFavorito(id);
        res.send('Favorito salvo com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteFavorito(req, res) {
    try {
        const id = req.params.id;
        await deletarFavorito(id);
        res.send('Favorito deletado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    getFavoritos,
    getFavorito,
    postFavorito,
    deleteFavorito,
}