import Usuario from '../models/usuario.model.js';

export const obtenerUsuarioPorIdService = async (id) => {
    const usuario = await Usuario.findById(id).select('-password -__v');
    return usuario;
}

export const modificarUsuarioPorIdService = async (id, datosNuevos) => {
    const usuarioModificado = await Usuario.findByIdAndUpdate(id, datosNuevos, {new: true});
    return usuarioModificado;
}

export const obtenerPeliculasUsuarioPorIdService = async (id) => {
    const usuario = await Usuario.findById(id).populate("peliculas");
    return usuario.peliculas;
}

export const obtenerSeriesUsuarioPorIdService = async (id) => {
    const usuario = await Usuario.findById(id).populate("series");
    return usuario.series;
}

export const obtenerUsuarioPeliculasSeriesPorIdService = async (id) => {
    const usuario = await Usuario.findById(id).select('-password -__v').populate("peliculas").populate("series");
    return usuario;
}