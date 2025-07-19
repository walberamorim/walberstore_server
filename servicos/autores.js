const db = require('../db');

async function getTodosOsAutores() {
    const [rows] = await db.query('SELECT * FROM autor');
    return rows;
}

async function getAutorPorId(id) {
    const [autores] = await db.query('SELECT * FROM autor WHERE id = ?', [id]);
    return autores[0];
}

async function salvarAutor(autor) {
    const { nome, nacionalidade } = autor;
    const [result] = await db.query(
        'INSERT INTO autor (nome, nacionalidade) VALUES (?, ?)',
        [nome, nacionalidade]
    );
    return {
        id: result.insertId,
        ...autor
    };
}

async function atualizarAutor(id, autor) {
    const campos = [];
    const valores = [];
    for (const [chave, valor] of Object.entries(autor)) {
        campos.push(`${chave} = ?`);
        valores.push(valor);
    }
    valores.push(id);
    const sql = `UPDATE autor SET ${campos.join(', ')} WHERE id = ?`;
    await db.query(sql, valores);
}

async function deletarAutor(id) {
    await db.query('DELETE FROM autor WHERE id = ?', [id]);
}

module.exports = {
    getTodosOsAutores,
    getAutorPorId,
    salvarAutor,
    atualizarAutor,
    deletarAutor,
}