import express from "express";
import { obtenerUsuarioPorId, obtenerPeliculasUsuarioPorId, modificarUsuario, obtenerSeriesUsuarioPorId, obtenerUsuarioPeliculasSeriesPorId } from "../controllers/usuarios.controller.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import { actualizarUsuarioSchema } from "../validators/usuarios.validators.js";

const router = express.Router();

router.get('/', obtenerUsuarioPorId);
router.get('/peliculas', obtenerPeliculasUsuarioPorId);
router.get('/series', obtenerSeriesUsuarioPorId);
router.patch('/', validateBody(actualizarUsuarioSchema), modificarUsuario);
router.get('/peliculas-series/', obtenerUsuarioPeliculasSeriesPorId);

export default router;