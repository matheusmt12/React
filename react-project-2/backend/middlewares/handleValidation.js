const {validationResult} = require("express-validator");

const validate = (req,res, next) =>{
    const errors = validationResult(req);

    if(errors.isEmpty()){
        return next();
    }

    const errorList = [];

    errors.array().map((erro) => errorList.push(erro.msg));

    return res.status(422).json({
        errors : errorList
    });
}

module.exports = validate;