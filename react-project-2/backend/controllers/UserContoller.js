const User = require('../model/User');

const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');

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

    const user = await User.findOne({ email });

    if (user) {
        res.status(422).json({ errors: 'Este E-mail ja esta cadastrado' });
        return;
    }

    const salt = await bcrypt.genSalt()

    const passwordBc = await bcrypt.hash(password, salt);

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


const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({ errors: 'O E-mail não existe' });
        return;
    }

    if (!(await bcrypt.compare(password, user.password ))){

        res.status(422).json({errors : 'Senha inválida!'});
        return;
    }

    res.status(200).json({
        _id : user._id,
        profileImg : user.profileImg,
        token : generateToken(user._id)
    });

}

module.exports = {
    register,
    login
};