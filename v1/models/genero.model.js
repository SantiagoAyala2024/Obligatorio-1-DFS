import mongoose from "mongoose";
const { Schema } = mongoose;

const generoSchema = new Schema({
    nombre: {type: String, required:true}
});

export default mongoose.model('Genero', generoSchema);