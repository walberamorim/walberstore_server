import livros from '../models/Livros.js';

async function getTodosOsLivros() {
    const listalivros = await livros.find({});
    return listalivros;
}

async function getLivroPorId(id) {
    return await livros.findById(id);
}

async function salvarLivro(livro) {
    try {
        livros.create(livro);
    } catch (error) {
        console.log(error);
    }
}

async function atualizarLivro(id, livro) {
    try {
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
};