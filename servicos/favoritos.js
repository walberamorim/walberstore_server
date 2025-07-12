const db = require('../db');

async function getTodosOsFavoritos() {
    const [rows] = await db.query('SELECT * FROM favoritos');
    return rows;
}

async function getFavoritoPorId(id) {
    const [rows] = await db.query('SELECT * FROM favoritos WHERE id = ?', [id]);
    return rows[0];
}

async function salvarFavorito(favorito) {
    const { nome, autor, ano } = favorito;
    const [result] = await db.query(
        'INSERT INTO favoritos (nome, autor, ano) VALUES (?, ?, ?)', 
        [nome, autor, ano]
    );
    return {
        id: result.insertId,
        ...favorito
    };
}

async function deletarFavorito(id) {
    await db.query('DELETE FROM favoritos WHERE id = ?', [id]);
}

module.exports = {
    getTodosOsFavoritos,
    getFavoritoPorId,
    salvarFavorito,
    deletarFavorito,
}