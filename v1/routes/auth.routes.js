import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { validateBody } from '../middlewares/validateBody.middleware.js';
import { registerUsuarioSchema, loginUsuarioSchema } from '../validators/auth.validators.js';

const router = express.Router();

router.post('/register', validateBody(registerUsuarioSchema), register);
router.post('/login', validateBody(loginUsuarioSchema), login);

export default router;