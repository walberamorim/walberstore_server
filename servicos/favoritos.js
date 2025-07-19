import Favoritos from '../models/Favoritos.js';

async function getTodosOsFavoritos() {
    return await Favoritos.find({});
}

async function getFavoritoPorId(id) {
    return await Favoritos.findById(id);
}

async function salvarFavorito(favorito) {
    try {
        await Favoritos.create(favorito);
    } catch (error) {
        console.log(error);
    }
}

async function deletarFavorito(id) {
    try {
        await Favoritos.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

export {
    getTodosOsFavoritos,
    getFavoritoPorId,
    salvarFavorito,
    deletarFavorito,
}