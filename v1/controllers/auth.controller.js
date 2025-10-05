import { registerService, loginService } from "../services/auth.services.js";

export const login = async (req, res) => {
    const token = await loginService(req.body);
    if(!token){
        return res.status(401).json({ message: 'Credenciales Inválidas'});
    }
    res.json({ message: 'Login Exitoso', token});
};

export const register = async (req, res) => {
    const token = await registerService(req.body);
    res.status(201).json({ message: 'Usuario registrado con éxito', token });
};