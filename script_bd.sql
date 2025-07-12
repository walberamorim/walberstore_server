USE walberstore;

CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    autor VARCHAR(255),
    ano INT
);

CREATE TABLE favoritos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    autor VARCHAR(255),
    ano INT
);

INSERT INTO
    livros (nome, autor, ano)
VALUES
    ('Clean Code', 'Robert C. Martin', 2008),
    (
        'JavaScript: The Good Parts',
        'Douglas Crockford',
        2008
    ),
    (
        'Estruturas de Dados e Algoritmos em Java',
        'Robert Lafore',
        2002
    ),
    (
        'O Programador Pragmático',
        'Andrew Hunt e David Thomas',
        1999
    ),
    (
        'Código Limpo para Node.js',
        'Mário Souto',
        2021
    );