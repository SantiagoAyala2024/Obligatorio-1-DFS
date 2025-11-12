import { obtenerUsuarioPorIdService, obtenerPeliculasUsuarioPorIdService, modificarUsuarioPorIdService, obtenerSeriesUsuarioPorIdService, obtenerUsuarioPeliculasSeriesPorIdService } from "../services/usuarios.services.js";

export const obtenerUsuarioPorId = async (req, res) => {
    const usuario = await obtenerUsuarioPorIdService(req.userId);
    if(!usuario){
        return res.status(404).json({ message: 'Usuario no encontrado'});
    }
    res.status(200).json(usuario);
};

export const obtenerUsuarioPeliculasSeriesPorId = async (req, res) => {
    const usuario = await obtenerUsuarioPeliculasSeriesPorIdService(req.userId);
    if(!usuario){
        return res.status(404).json({ message: 'Usuario no encontrado'});
    }
    res.status(200).json(usuario);
}

export const obtenerPeliculasUsuarioPorId = async (req, res) => {
    const peliculas = await obtenerPeliculasUsuarioPorIdService(req.userId);
    if(!peliculas){
        return res.status(404).json({ message: 'Usuario no tiene peliculas'});
    }
    res.status(200).json(peliculas);
} 

export const obtenerSeriesUsuarioPorId = async (req, res) => {
    const series = await obtenerSeriesUsuarioPorIdService(req.userId);
    if(!series){
        return res.status(404).json({ message: 'Usuario no tiene series'});
    }
    res.status(200).json(series);
}
    
export const modificarUsuario = async (req, res) => {
    const usuarioActualizado = await modificarUsuarioPorIdService(req.userId, req.body);
    if(!usuarioActualizado){
        return res.status(404).json({ message: 'Usuario no encontrado'});
    }
    res.status(200).json(usuarioActualizado);
};