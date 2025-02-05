const User = require('../model/User');

const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

// GERAR TOKEN JWT JAVASCRIPT MAIS FACIL DO QUE TIRAR DOCE DE CRIANÇA

const generateToken = (id) => {
    jwt.sign({id}, jwtSecret , {
        expiresIn : '7d',
    });
};


//registrar o usuario

const register = async (req ,res ) =>{
    res.send('Registrado');
}

module.exports = {
    register,
};