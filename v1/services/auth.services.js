import Usuario from "../models/usuario.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerService = async ({ username, name, lastname, email, password, plan }) => {

    const usuarioExistente = await Usuario.findOne({ username });

    if(usuarioExistente){
        let err = new Error("El nombre de usuario ya existe");
        err.status = 409;
        throw err;
    }

    try{
        const hashPassword = bcrypt.hashSync(password, 12);
        const usuario = new Usuario({ username, name, lastname, email, password: hashPassword, plan });
        await usuario.save();

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return token;

    }catch(error){
        error.status = 500;
        error.message = error.message || "Internal Server Error";
        throw error;
    }
};

export const loginService = async ({ username, password }) => {

    const usuario = await Usuario.findOne({ username });

    if(!usuario || !bcrypt.compareSync(password, usuario.password)){
        let err = new Error("Credenciales Inválidas");
        err.status = 401;
        throw err;
    }

    try{
       
        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return token;

    }catch(error){
        error.status = 500;
        error.message = error.message || "Internal Server Error";
        throw error;
    }
};