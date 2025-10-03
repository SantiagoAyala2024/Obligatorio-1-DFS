import Joi from 'joi';

export const registerUsuarioSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    name: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    plan: Joi.string().required()
});

export const loginUsuarioSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().required()
});