const express = require("express");

const router = express.Router();


// middlewares
const validate = require('../middlewares/handleValidation');
const { userCreateValidation, loginVAlidate } = require("../middlewares/userValidations");


const { register,login } = require("../controllers/UserContoller");

router.post('/register', userCreateValidation(), validate, register);

router.post('/login', loginVAlidate(), validate, login);


module.exports = router;