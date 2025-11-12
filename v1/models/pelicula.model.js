import mongoose from "mongoose";
const { Schema } = mongoose;

const peliculaSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    duracion: {type: Number, required: true},
    fecha: {type: Date, default: Date.now},
    url: {type: String, required: true},
    generos: [{type: Schema.Types.ObjectId, ref:'Genero'}]
});

peliculaSchema.pre('save', function (next) {
    this.nombre = this.nombre.toLowerCase();
    next();
});

export default mongoose.model('Pelicula', peliculaSchema);