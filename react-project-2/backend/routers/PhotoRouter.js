const express = require('express');


const router = express.Router();

//middlewares

const { validatePhoto } = require('../middlewares/photoValidate');
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation');
const { imageUpload } = require("../middlewares/imageUpload");


//controllers 

const { insertPhoto } = require('../controllers/PhotoController');

//rotas 

router.post('/', authGuard, imageUpload.single("image"), validatePhoto(), validate, insertPhoto);

module.exports = router;

