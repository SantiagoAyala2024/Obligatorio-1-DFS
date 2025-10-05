import { registrarPeliculaService, obtenerPeliculasService, obtenerPeliculaPorIdService, modificarPeliculaPorIdService, eliminarPeliculaService } from "../services/peliculas.services.js";

export const registrarPelicula = async (req, res) => { 
    const peliculaRegistrada = await registrarPeliculaService(req.body, req.userId);
    res.status(201).json(peliculaRegistrada);
};

export const obtenerPeliculas = async (req, res) => {
    const pelicula = await obtenerPeliculasService();
    res.status(200).json(pelicula);
}

export const obtenerPeliculaPorId = async (req, res) => {
    const { id } = req.params;
    const pelicula = await obtenerPeliculaPorIdService(id);
    if(!pelicula){
        return res.status(404).json({ message: "Pelicula no encontrada" });
    }
    res.status(200).json(pelicula);
}

export const modificarPelicula = async (req, res) => {
    const { id } = req.params;
    const peliculaActualizada = await modificarPeliculaPorIdService(id, req.body);
    if(!peliculaActualizada){
        return res.status(404).json({ message: 'Pelicula no encontrada'});
    }
    res.status(200).json(peliculaActualizada);
}

export const eliminarPelicula = async (req, res) => {
    const { id } = req.params;
    const peliculaEliminada = await eliminarPeliculaService(id, req.userId);
    if(!peliculaEliminada){
        return res.status(404).json({ message: 'Pelicula no encontrada' });
    }
    res.status(204).send();
}