import Joi from "joi";

export const actualizarUsuarioSchema = Joi.object({

    username: Joi.string().min(3).max(30).required(),
    name: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required().valid(Joi.ref('password')),
    plan: Joi.string().required()
    
});