import Joi from 'joi';

export const registrarPeliculaSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required(),
    descripcion: Joi.string().min(3).max(100).required(),
    duracion: Joi.number().min(1).required(),
    fecha: Joi.date(),
    generos: Joi.array().items(Joi.string())
});

export const actualizarPeliculaSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required(),
    descripcion: Joi.string().min(3).max(100).required(),
    duracion: Joi.number().min(1).required(),
    fecha: Joi.date(),
    generos: Joi.array().items(Joi.string())
});