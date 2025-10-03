import express from "express";
import { obtenerGeneros, obtenerGeneroPorId } from "../controllers/generos.controller.js";
import { validateObjectIdMiddleware } from "../middlewares/validateObjectId.middleware.js";

const router = express.Router();

router.get('/', obtenerGeneros);
router.get('/:id', validateObjectIdMiddleware, obtenerGeneroPorId);

export default router;