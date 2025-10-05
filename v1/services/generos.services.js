import Genero from '../models/genero.model.js';

export const obtenerGenerosService = async () => {
    const genero = await Genero.find();
    return genero;
}

export const obtenerGeneroPorIdService = async (id) => {
    
    const genero = await Genero.findById(id);
    if(!genero){
        let err = new Error("No se encontro el genero");
        err.status = 404;
        throw err;
    }
    return genero;
}
