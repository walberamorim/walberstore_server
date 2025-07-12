const fs = require('fs');
const dadosAtuais = JSON.parse(fs.readFileSync('livros.json'));
const novoDado = {id: 4, nome: 'O Hobbit'};
fs.writeFileSync('livros.json', JSON.stringify([...dadosAtuais, novoDado]));
console.log(JSON.parse(fs.readFileSync('livros.json')));