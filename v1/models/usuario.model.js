import mongoose from "mongoose";
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    plan: {type: Schema.Types.ObjectId, ref:'Plan', required:true },
    peliculas: [{type: Schema.Types.ObjectId, ref:'Pelicula'}],
    series: [{type: Schema.Types.ObjectId, ref:'Serie'}]
});

usuarioSchema.pre('save', function (next) {
    this.username = this.username.toLowerCase();
    next();
});

export default mongoose.model('Usuario', usuarioSchema);