import mongoose from "mongoose";
const { Schema } = mongoose;

const planSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true}
});

export default mongoose.model('Plan', planSchema);