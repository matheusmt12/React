const User = require("../model/User");

const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) =>{

    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(" ")[1];

    //verificar token

    if(!token) res.status(401).json({errors : ['Acesso negado!']});
    

    try {
        const verified = jwt.verify(token, jwtSecret);

        req.user = await User.findById(verified.id).select("-password");
    
        next();
    } catch (error) {
        res.status(401).json({errors : ['Token inválido!']})    
    }


}

module.exports = authGuard;