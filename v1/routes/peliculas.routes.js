import express from "express";
import { registrarPelicula, obtenerPeliculas, obtenerPeliculaPorId, modificarPelicula, eliminarPelicula } from "../controllers/peliculas.controller.js";
import { registrarPeliculaSchema, actualizarPeliculaSchema } from "../validators/peliculas.validators.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";

const router = express.Router();

router.post('/' , validateBody(registrarPeliculaSchema), registrarPelicula);
router.get('/', obtenerPeliculas);
router.get('/:id', validateObjectIdMiddleware, obtenerPeliculaPorId);
router.patch('/:id', validateObjectIdMiddleware, validateBody(actualizarPeliculaSchema), modificarPelicula);
router.delete('/:id', validateObjectIdMiddleware, eliminarPelicula);

export default router;