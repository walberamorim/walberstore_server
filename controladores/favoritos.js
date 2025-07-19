import { 
    getTodosOsFavoritos, 
    getFavoritoPorId, 
    salvarFavorito,
    deletarFavorito 
} from '../servicos/favoritos.js';

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosOsFavoritos();
        res.send(favoritos);
    } catch (error) {
        res.status(500).send(error);
    }
}

function getFavorito(req, res) {
    try {
        const id = Number(req.params.id);
        if (!id || Number.isNaN(id)) {
            return res.status(422).send('Id do favorito deve ser um número válido');
        }
        const favorito = getFavoritoPorId(id);
        res.send(favorito);
    } catch (error) {
        res.status(500).send(error);
    }
}

function postFavorito(req, res) {
    const id = Number(req.params.id);
    try {
        if (!req.body.nome) {
            return res.status(422).send('O nome do favorito deve ser informado');
        }
        salvarFavorito(req.body);
        res.send('Favorito salvo com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

function deleteFavorito(req, res) {
    try {
        const id = Number(req.params.id);
        if (!id || Number.isNaN(id)) {
            return res.status(422).send('Id do favorito deve ser um número válido');
        }
        deletarFavorito(id);
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