import { registrarSerieService, obtenerSeriesService, obtenerSeriePorIdService, modificarSeriePorIdService, eliminarSerieService } from "../services/series.services.js";

export const registrarSerie = async (req, res) => { 
    const serieRegistrada = await registrarSerieService(req.body, req.userId);
    res.status(201).json(serieRegistrada);
};

export const obtenerSeries = async (req, res) => {
    const serie = await obtenerSeriesService();
    res.status(200).json(serie);
}

export const obtenerSeriePorId = async (req, res) => {
    const { id } = req.params;
    const serie = await obtenerSeriePorIdService(id);
    if(!serie){
        return res.status(404).json({ message: "Serie no encontrada" });
    }
    res.status(200).json(serie);
}

export const modificarSerie = async (req, res) => {
    const { id } = req.params;
    const serieActualizada = await modificarSeriePorIdService(id, req.body);
    if(!serieActualizada){
        return res.status(404).json({ message: 'Serie no encontrada'});
    }
    res.status(200).json(serieActualizada);
}

export const eliminarSerie = async (req, res) => {
    const { id } = req.params;
    const serieEliminada = await eliminarSerieService(id, req.userId);
    if(!serieEliminada){
        return res.status(404).json({ message: 'Serie no encontrada' });
    }
    res.status(204).send();
}