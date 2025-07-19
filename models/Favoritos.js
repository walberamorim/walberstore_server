import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
}, {versionKey: false});

const favorito = mongoose.model('favoritos', livroSchema);
export default favorito;