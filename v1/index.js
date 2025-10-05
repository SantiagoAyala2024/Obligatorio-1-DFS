import express from 'express';
import authRoutes from './routes/auth.routes.js';
import usuarioRoutes from './routes/usuarios.routes.js';
import peliculaRoutes from './routes/peliculas.routes.js';
import seriesRoutes from './routes/series.routes.js';
import generosRoutes from './routes/generos.routes.js';
import planRoutes from './routes/planes.routes.js';
import { authenticate } from './middlewares/auth.middleware.js';

const router = express.Router();

//Rutas desprotegidas

router.use('/auth', authRoutes);

//Middleware de autenticacion

router.use(authenticate);

//Rutas protegidas

router.use('/usuarios', usuarioRoutes);

router.use('/peliculas', peliculaRoutes);

router.use('/series', seriesRoutes);

router.use('/categorias', generosRoutes);

router.use('/planes', planRoutes);

export default router;