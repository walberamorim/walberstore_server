import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rotaLivros from './rotas/livros.js';
import rotaFavoritos from './rotas/favoritos.js';
import rotaAutores from './rotas/autores.js';
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));
const port = 8000;

const mongoUri = 'mongodb+srv://admin:123@walberstore.35fjflj.mongodb.net/walberstore?retryWrites=true&w=majority&appName=walberstore';

mongoose.connect(mongoUri);

mongoose.connection.on('error', (error) => console.log("Erro de conexão ", error));
mongoose.connection.once('open', () => console.log('Conectado ao banco de dados'));

app.use('/livros', rotaLivros);
app.use('/favoritos', rotaFavoritos);
app.use('/autores', rotaAutores);

app.listen(port, () => {
    console.log(`Exemplo rodando no http://localhost:${port}`);
});