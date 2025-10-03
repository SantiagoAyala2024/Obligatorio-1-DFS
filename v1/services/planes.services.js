import Plan from '../models/plan.model.js';

export const obtenerPlanesService = async () => {
    const plan = await Plan.find();
    return plan;
}