const express = require("express");

const router = express.Router();


// middlewares
const validate = require('../middlewares/handleValidation');
const { userCreateValidation, loginVAlidate } = require("../middlewares/userValidations");
const authGuard = require('../middlewares/authGuard');


const { register,login, getProfile } = require("../controllers/UserContoller");

router.post('/register', userCreateValidation(), validate, register);

router.post('/login', loginVAlidate(), validate, login);

router.get('/profile', authGuard,getProfile)

module.exports = router;