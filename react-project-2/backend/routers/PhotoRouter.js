const express = require('express');


const router = express.Router();

//middlewares

const { validatePhoto } = require('../middlewares/photoValidate');
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation');
const { imageUpload } = require("../middlewares/imageUpload");


//controllers 

const { insertPhoto, deletPhoto, getAllPhotos,getAllPhotosIdUser ,getPhotoId } = require('../controllers/PhotoController');
const { get } = require('mongoose');

//rotas 

router.post('/', authGuard, imageUpload.single("image"), validatePhoto(), validate, insertPhoto);

router.delete('/:id',authGuard, deletPhoto);

router.get('/', getAllPhotos);

router.get('/user/:id', getAllPhotosIdUser)

router.get('/:id',getPhotoId)

module.exports = router;

