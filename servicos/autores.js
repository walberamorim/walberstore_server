import { autores } from '../models/Autores.js';

async function getTodosOsAutores() {
    const listaAutores = await autores.find({});
    return listaAutores;
}

async function getAutorPorId(id) {
    return await autores.findById(id);
}

async function salvarAutor(autor) {
    try {
        await autores.create(autor);
    } catch (error) {
        console.log(error);
    }
}

async function atualizarAutor(id, autor) {
    try {
        await autores.findByIdAndUpdate(id, autor);
    } catch (error) {
        console.log(error);
    }
}

async function deletarAutor(id) {
    try {
        await autores.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

export {
    getTodosOsAutores,
    getAutorPorId,
    salvarAutor,
    atualizarAutor,
    deletarAutor,
}