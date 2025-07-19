DROP DATABASE IF EXISTS walberstore;
CREATE DATABASE walberstore;
USE walberstore;

-- Tabela de autores
CREATE TABLE autor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    nacionalidade VARCHAR(100)
);

-- Tabela de livros, com chave estrangeira para autor
CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    ano INT,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autor(id)
);

-- Tabela de favoritos
CREATE TABLE favoritos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    livro_id INT,
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);

-- Inserindo autores de exemplo
INSERT INTO autor (nome, nacionalidade) VALUES
    ('Robert C. Martin', 'Americano'),
    ('Douglas Crockford', 'Americano');

-- Inserindo livros de exemplo, relacionando com autores
INSERT INTO livros (nome, ano, autor_id) VALUES
    ('Clean Code', 2008, 1),
    ('JavaScript: The Good Parts', 2008, 2),
    ('Estruturas de Dados e Algoritmos em Java', 2002, 1),
    ('O Programador Pragmático', 1999, 1),
    ('Código Limpo para Node.js', 2021, 2);

-- Inserindo favoritos de exemplo, relacionando com livros
INSERT INTO favoritos (livro_id) VALUES
    (1);