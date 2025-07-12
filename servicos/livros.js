const db = require('../db');

async function getTodosOsLivros() {
    const [rows] = await db.query('SELECT * FROM livros');
    return rows;
}

async function getLivroPorId(id) {
    const [livros] = await db.query('SELECT * FROM livros WHERE id = ?', [id]);
    return livros[0];
}

async function salvarLivro(livro) {
    const { nome, autor, ano } = livro;
    const [result] = await db.query('INSERT INTO livros (nome, autor, ano) VALUES (?, ?, ?)', [nome, autor, ano]);
    return {
        id: result.insertId,
        ...livro
    };
}

async function atualizarLivro(id, livro) {
    const campos = [];
    const valores = [];
    for (const [chave, valor] of Object.entries(livro)) {
        campos.push(`${chave} = ?`);
        valores.push(valor);
    }
    valores.push(id);
    const sql = `UPDATE livros SET ${campos.join(', ')} WHERE id = ?`;
    await db.query(sql, valores);
}

async function deletarLivro(id) {
    await db.query('DELETE FROM livros WHERE id = ?', [id]);
}

module.exports = {
    getTodosOsLivros,
    getLivroPorId,
    salvarLivro,
    atualizarLivro,
    deletarLivro,
}