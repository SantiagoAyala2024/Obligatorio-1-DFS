import Joi from 'joi';

export const registrarSerieSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required().messages({
        "string.empty": "El nombre es obligatorio"
    }),
    descripcion: Joi.string().min(3).max(100).required().messages({
        "string.empty": "La descripción es obligatoria"
    }),
    episodios: Joi.number().min(1).required().messages({
        "number.base": "Debe ser un número",
    }),
    fecha: Joi.date().required().messages({
        "date.base": "Fecha inválida"
    }),
    generos: Joi.array().items(Joi.string()).required().messages({
        "array.base": "Selecciona al menos un género"
    }),
    url: Joi.string().required().messages({
        "string.empty": "Selecciona una imagen"
    })
});

export const actualizarSerieSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required().messages({
        "string.empty": "El nombre es obligatorio"
    }),
    descripcion: Joi.string().min(3).max(100).required().messages({
        "string.empty": "La descripción es obligatoria"
    }),
    episodios: Joi.number().min(1).required().messages({
        "number.base": "Debe ser un número",
    }),
    fecha: Joi.date().required().messages({
        "date.base": "Fecha inválida"
    }),
    generos: Joi.array().items(Joi.string()).required().messages({
        "array.base": "Selecciona al menos un género"
    }),
    url: Joi.string().required().messages({
        "string.empty": "Selecciona una imagen"
    })
});