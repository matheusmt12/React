const express = require("express");

const router = express.Router();


// middlewares
const validate = require('../middlewares/handleValidation');
const { userCreateValidation } = require("../middlewares/userValidations");


const { register } = require("../controllers/UserContoller");

router.post('/register', userCreateValidation(), validate, register);


module.exports = router;