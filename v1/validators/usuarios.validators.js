import Joi from "joi";

export const actualizarUsuarioSchema = Joi.object({
    plan: Joi.string().required()
});