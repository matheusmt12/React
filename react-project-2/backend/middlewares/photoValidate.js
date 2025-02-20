const { body } = require('express-validator');

const validatePhoto = () => {
    return [
        body("title")
            .not()
            .equals('undefined')
            .withMessage("o título é obrigatório")
            .isString()
            .withMessage("O título é obrigatório"),
        body("image")
            .custom((value, { req }) => {
                if (!req.file) {
                    throw new Error("A imagem é obrigatória");
                }
                return true;
            })
    ];
}


const photoUpadateValidate = () => {

    return [body("title")
        .optional()
        .isString()
        .withMessage("O título é obrigatório")
    ];
}

const ValidateCommentPhoto = () => {

    return [
        body('comment')
        .isString()
        .withMessage('O comentário é requerido')
    ];
}
module.exports = { validatePhoto, photoUpadateValidate ,ValidateCommentPhoto}