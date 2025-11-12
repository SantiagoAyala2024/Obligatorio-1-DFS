import Pelicula from '../models/pelicula.model.js';
import Usuario from '../models/usuario.model.js';

export const registrarPeliculaService = async (datosPelicula, userId) => {

    const peliculaEncontrada = await Pelicula.findOne({nombre: datosPelicula.nombre});
    if(peliculaEncontrada){
        let err = new Error("La pelicula ya existe");
        err.status = 409;
        throw err; 
    }

    const pelicula = new Pelicula(datosPelicula);

    const usuario = await Usuario.findById(userId).populate("plan");
    if(!usuario){
        let err = new Error("Usuario no encontrado");
        err.status = 404;
        throw err;
    }

    if(usuario.plan.nombre === "Plus"){
        if(usuario.peliculas.length < 10){
            await pelicula.save();
            usuario.peliculas.push(pelicula._id);
            await usuario.save();
        }else{
            let err = new Error("Limite Alcanzado. Cambie al Plan Premium");
            err.status = 403;
            throw err;
        }
    }else if(usuario.plan.nombre === "Premium"){

        await pelicula.save();
        usuario.peliculas.push(pelicula._id);
        await usuario.save();
    }
    
    return pelicula;
}

export const obtenerPeliculasService = async () => {
    const pelicula = await Pelicula.find();
    return pelicula;
}

export const obtenerPeliculaPorIdService = async (id) => {
    
    let pelicula;

    try{
        pelicula = await Pelicula.findById(id);
    }catch(error){
        let err = new Error("ID Inválido");
        err.status = 400;
        throw err;   
    }

    if(!pelicula){
        let err = new Error("No se encontro la pelicula");
        err.status = 404;
        throw err;
    }

    return pelicula;
}

export const modificarPeliculaPorIdService = async (id, datosNuevos) => {
    const pelicula = await Pelicula.findByIdAndUpdate(id, datosNuevos);
    return pelicula;
}

export const eliminarPeliculaService = async (id, userId) => {
    const peliculaEncontrada = await Pelicula.findById(id); 
    
    if(!peliculaEncontrada){
        let err = new Error("No se encontró la película a eliminar");
        err.status = 404;
        throw err;
    }

    const usuario = await Usuario.findById(userId);

    if (!usuario) {
        let err = new Error("Usuario no encontrado");
        err.status = 404;
        throw err;
    }

    const estaVinculada = usuario.peliculas.some(peliculaId => peliculaId.toString() === id.toString());

    if (estaVinculada) {
        
        await Usuario.findByIdAndUpdate(userId, { $pull: { peliculas: id } }); 
        
        const peliculaEliminar = await Pelicula.findByIdAndDelete(id); 

        return peliculaEliminar;

    } else {
        let err = new Error("La película no está vinculada al usuario y no puede ser eliminada por esta operación.");
        err.status = 409;
        throw err;
    }
}