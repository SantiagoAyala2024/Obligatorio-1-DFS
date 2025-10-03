import Serie from '../models/serie.model.js';
import Usuario from '../models/usuario.model.js';

export const registrarSerieService = async (datosSerie, userId) => {

    const serieEncontrada = await Serie.findOne({nombre: datosSerie.nombre});
    if(serieEncontrada){
        let err = new Error("La serie ya existe");
        err.status = 409;
        throw err;   
    }

    const serie = new Serie(datosSerie);

    const usuario = await Usuario.findById(userId).populate("plan");
    if(!usuario){
        let err = new Error("Usuario no encontrado");
        err.status = 404;
        throw err;
    }

    if(usuario.plan.nombre === "Plus"){
        if(usuario.series.length < 10){
            await serie.save();
            usuario.series.push(serie._id);
            await usuario.save();
        }else{
            return "Limite Alcanzado. Cambie al Plan Premium";
        }
    }else if(usuario.plan.nombre === "Premium"){

        await serie.save();
        usuario.series.push(serie._id);
        await usuario.save();
    }

    return serie;
}

export const obtenerSeriesService = async () => {
    const serie = await Serie.find();
    return serie;
}

export const obtenerSeriePorIdService = async (id) => {
    
    let serie;

    try{
        serie = await Serie.findById(id);
    }catch(error){
        let err = new Error("ID Inválido");
        err.status = 400;
        throw err;   
    }

    if(!serie){
        let err = new Error("No se encontro la serie");
        err.status = 404;
        throw err;
    }

    return serie;
}

export const modificarSeriePorIdService = async (id, datosNuevos) => {
    const serie = await Serie.findByIdAndUpdate(id, datosNuevos);
    return serie;
}

export const eliminarSerieService = async (id, userId) => {

    const usuario = await Usuario.findById(userId).populate("series");
    const serieEncontrada = await Serie.findById(id);
    if(!serieEncontrada){
        let err = new Error("No se encontro la serie a eliminar");
        err.status = 404;
        throw err;
    }    
    const serieEliminar = await Serie.findByIdAndDelete(id);
    usuario.series.pull(id);
    usuario.save();
    return serieEliminar;
}