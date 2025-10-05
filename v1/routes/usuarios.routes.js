import express from "express";
import { obtenerUsuarioPorId, obtenerPeliculasUsuarioPorId, modificarUsuario, obtenerSeriesUsuarioPorId } from "../controllers/usuarios.controller.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";
import { actualizarUsuarioSchema } from "../validators/usuarios.validators.js";

const router = express.Router();

router.get('/', obtenerUsuarioPorId);
router.get('/peliculas', obtenerPeliculasUsuarioPorId);
router.get('/series', obtenerSeriesUsuarioPorId);
router.patch('/:id', validateObjectIdMiddleware, validateBody(actualizarUsuarioSchema), modificarUsuario);

export default router;