const { body } = require('express-validator');

const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage({ nome: 'O campo nome é obrigatório.' })
            .isLength({ min: 3 }).withMessage({ nome: "O campo nome tem que ter no minimo 3 caracteres" }),
        body("email")
            .isString().withMessage({ email: "O campo email é nessesario." })
            .isEmail().withMessage({email : "insira um email válido"}),
        body("password")
            .isString().withMessage("O campo senha é obrigatório")
            .isLength({min : 5}).withMessage("O campo senha tem que ter no minimo 5 caracteres"),
        body("confirmPessword")
        .isString().withMessage("o campo Confirmar senha é nessesário.")
        .custom((value,{req})=>{
            if(value != req.body.password){
                throw new Error("A senha não soa compatíveis");
            }
            return true
        })

    ];
}

const loginVAlidate = () =>{
    return[
        body("email")
            .isEmail().withMessage("O campo nome é obrigatório"),
        body("password")
            .isString().withMessage("O campo senha é obrigatório")
    ];
}

const userUpdateValidate = () =>{

    return[
        body("name")
            .optional()
            .isLength({min: 3})
            .withMessage("O nome tem que ter no minimo 3 caracteres"),
        body('password')
            .optional()
            .isLength({min : 5})
            .withMessage("A senha tem que ter no minimo 5 caracteres"),


    ]
}

module.exports = {
    userCreateValidation,
    loginVAlidate,
    userUpdateValidate
};