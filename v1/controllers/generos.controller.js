import { obtenerGenerosService, obtenerGeneroPorIdService } from "../services/generos.services.js";

export const obtenerGeneros = async (req, res) => {
    const generos = await obtenerGenerosService();
    res.status(200).json(generos);
};

export const obtenerGeneroPorId = async (req, res) => {
    const { id } = req.params;
    const genero = await obtenerGeneroPorIdService(id);
    if(!genero){
        return res.status(404).json({ message: 'Genero no encontrado'});
    }
    res.status(200).json(genero);
};