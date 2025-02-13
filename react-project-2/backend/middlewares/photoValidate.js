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

module.exports = { validatePhoto }