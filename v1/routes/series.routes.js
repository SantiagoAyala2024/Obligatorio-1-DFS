import express from "express";
import { registrarSerie, obtenerSeries, obtenerSeriePorId, modificarSerie, eliminarSerie } from '../controllers/series.controller.js';
import { registrarSerieSchema, actualizarSerieSchema } from "../validators/series.validators.js";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";

const router = express.Router();

router.post('/', validateBody(registrarSerieSchema), registrarSerie);
router.get('/', obtenerSeries);
router.get('/:id', validateObjectIdMiddleware, obtenerSeriePorId);
router.patch('/:id', validateObjectIdMiddleware, validateBody(actualizarSerieSchema), modificarSerie);
router.delete('/:id', validateObjectIdMiddleware, eliminarSerie);

export default router;