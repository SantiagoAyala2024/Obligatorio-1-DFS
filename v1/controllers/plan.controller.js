import { obtenerPlanesService } from "../services/planes.services.js";

export const obtenerPlanes = async (req, res) => {
    const plan = await obtenerPlanesService();
    res.status(200).json(plan);
}