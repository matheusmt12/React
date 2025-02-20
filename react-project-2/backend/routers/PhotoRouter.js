const express = require('express');


const router = express.Router();

//middlewares

const { validatePhoto, photoUpadateValidate , ValidateCommentPhoto} = require('../middlewares/photoValidate');
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation');
const { imageUpload } = require("../middlewares/imageUpload");


//controllers 

const { insertPhoto, deletPhoto, getAllPhotos, getAllPhotosIdUser
    , getPhotoId, updatePhoto, likePhoto, commentPhoto } = require('../controllers/PhotoController');
const { get } = require('mongoose');

//rotas 

router.post('/', authGuard, imageUpload.single("image"), validatePhoto(), validate, insertPhoto);

router.delete('/:id', authGuard, deletPhoto);

router.get('/',authGuard, getAllPhotos);

router.get('/user/:id',authGuard, getAllPhotosIdUser);

router.get('/:id',authGuard, getPhotoId);

router.put('/:id', authGuard, photoUpadateValidate(), validate, updatePhoto);

router.put('/like/:id', authGuard, likePhoto);

router.put('/comment/:id', authGuard, ValidateCommentPhoto(), validate, commentPhoto);

module.exports = router;

