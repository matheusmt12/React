const User = require('../model/User');

const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose')

const jwtSecret = process.env.JWT_SECRET;


// GERAR TOKEN JWT JAVASCRIPT MAIS FACIL DO QUE TIRAR DOCE DE CRIANÇA

const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: '7d',
    });
};


//registrar o usuario

const register = async (req, res) => {
    const { name, email, password } = req.body;

    // verificar se tem algum emial com este nome
    const user = await User.findOne({ email });

    if (user) {
        res.status(422).json({ errors: 'Este E-mail ja esta cadastrado' });
        return;
    }

    // criptografar a senha
    const salt = await bcrypt.genSalt()
    const passwordBc = await bcrypt.hash(password, salt);

    //criar novo usuário
    const newUser = await User.create({
        name,
        password: passwordBc,
        email
    })

    if (!newUser) {
        res.status(500).json({ errors: 'Aconteceu algum erro, temte mais tarde!' })
        return;
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    });
}

// login do usuário
const login = async (req, res) => {

    const { email, password } = req.body;

    //vendo se o usuário existe 
    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({ errors: 'O E-mail não existe' });
        return;
    }

    if (!(await bcrypt.compare(password, user.password))) {

        res.status(422).json({ errors: 'Senha inválida!' });
        return;
    }

    res.status(200).json({
        _id: user._id,
        profileImg: user.profileImg,
        token: generateToken(user._id)
    });

}

const getProfile = async (req, res) => {

    const user = req.user;

    res.status(200).json(user);
}

const update = async (req, res) => {

        const { name, password, bio } = req.body;

        let imageProfile = null;

        if (req.file) {
            imageProfile = req.file.filename;
        }

        const userReq = req.user;

        const user = await User.findById(userReq._id).select("-password");

        if (name)
            user.name = name;
        if (password) {
            //criptocrafar nova senha 
            const salt = await bcrypt.genSalt();
            const passCry = await bcrypt.hash(password, salt);
            user.password = passCry;
        }
        if (imageProfile)
            user.profileImg = imageProfile;
        if (bio)
            user.bio = bio;

        await user.save();
        res.status(200).json({Sucesso: user})
}

const getByUserId = async (req, res) =>{

    try {
        const {id} = req.params;

        const user = await User.findById(id).select('-password');
    
        if(!user){
            res.status(404).json("Usuário não encontrado");
        }
    
        res.status(200).json({Usuario: user})
    } catch (error) {
        res.status(404).json("Usuario não ecnontrado");
        
    }
}

module.exports = {
    register,
    login,
    getProfile,
    update,
    getByUserId
};