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
    const { nome, ano, autor_id } = livro;
    const [result] = await db.query('INSERT INTO livros (nome, ano, autor_id) VALUES (?, ?, ?)', [nome, ano, autor_id]);
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

async function getLivrosPorNomeAutor(nomeAutor) {
    const [rows] = await db.query(
        `SELECT livros.* FROM livros
         INNER JOIN autor ON livros.autor_id = autor.id
         WHERE autor.nome LIKE ?`,
        [`%${nomeAutor}%`]
    );
    return rows;
}

module.exports = {
    getTodosOsLivros,
    getLivroPorId,
    salvarLivro,
    atualizarLivro,
    deletarLivro,
    getLivrosPorNomeAutor,
}