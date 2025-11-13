import mongoose from "mongoose";
const { Schema } = mongoose;

const serieSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    episodios: {type: Number, required: true},
    fecha: {type:Date, required: true}, //default: Date.now
    url: {type: String, required: true},
    generos: [{type: Schema.Types.ObjectId, ref:'Genero'}]
});

serieSchema.pre('save', function (next) {
    this.nombre = this.nombre.toLowerCase();
    next();
});

export default mongoose.model('Serie', serieSchema);