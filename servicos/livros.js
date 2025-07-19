import livros from '../models/Livros.js';
import {autores} from '../models/Autores.js';

async function getTodosOsLivros() {
    const listalivros = await livros.find({});
    return listalivros;
}

async function getLivrosPorEditora(editora) {
    const listalivros = await livros.find({ editora: editora });
    return listalivros;
}   

async function getLivroPorId(id) {
    return await livros.findById(id);
}

async function salvarLivro(livro) {
    try {
        const idAutor = livro.autor;
        livro.autor = await autores.findById(idAutor);
        livros.create(livro);
    } catch (error) {
        console.log(error);
    }
}

async function atualizarLivro(id, livro) {
    try {
        const idAutor = livro.autor;
        livro.autor = await autores.findById(idAutor);
        const livroAtt = await livros.findByIdAndUpdate(id, livro);
    } catch (error) {
        console.log(error);
    }
}

async function deletarLivro(id) {
    try {
        await livros.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

export {
    getTodosOsLivros,
    getLivroPorId,
    salvarLivro,
    atualizarLivro,
    deletarLivro,
    getLivrosPorEditora,
};