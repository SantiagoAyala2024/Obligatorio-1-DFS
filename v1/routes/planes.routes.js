import express from "express";
import { obtenerPlanes } from "../controllers/plan.controller.js";

const router = express.Router();

router.get('/', obtenerPlanes);

export default router;