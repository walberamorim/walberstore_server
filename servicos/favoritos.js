import Favoritos from '../models/Favoritos.js';
import Livros from '../models/Livros.js';

async function getTodosOsFavoritos() {
    return await Favoritos.find({});
}

async function getFavoritoPorId(id) {
    return await Favoritos.findById(id);
}

async function salvarFavorito(id) {
    try {
        const favExiste = await Favoritos.findById(id);
        if (favExiste) {
            throw new Error('Livro já favoritado');
        }
        const favorito = await Livros.findById(id);
        if (!favorito) {
            throw new Error('Livro não encontrado');
        }
        const novoFav = {
            _id: favorito._id,
            nome: favorito.nome,
            editora: favorito.editora,
            preco: favorito.preco,
            paginas: favorito.paginas
        }
        await Favoritos.create(novoFav);
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