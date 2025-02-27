const express = require("express");

const router = express.Router();


// middlewares
const validate = require('../middlewares/handleValidation');
const { userCreateValidation, loginVAlidate, userUpdateValidate } = require("../middlewares/userValidations");
const authGuard = require('../middlewares/authGuard');
const { imageUpload } = require("../middlewares/imageUpload");


//controllers
const { register,login, getProfile ,update, getByUserId} = require("../controllers/UserContoller");

router.post('/register', userCreateValidation(), validate, register);

router.post('/login', loginVAlidate(), validate, login);

router.get('/profile', authGuard,getProfile);

router.put('/', authGuard, userUpdateValidate(), validate, imageUpload.single('image'), update);

router.get('/:id', getByUserId);

module.exports = router;