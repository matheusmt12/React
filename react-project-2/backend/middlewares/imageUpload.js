const multer = require('multer');

const path = require('path');

const imageStore = multer.diskStorage({
    destination: function name(req, file, cal) {
        let folder = '';

        if (req.baseUrl.includes('users')) {
            folder = 'users';
        }
        else if (req.baseUrl.includes('photos')) {
            folder = 'photos';
        }
        cal(null, `uploads/${folder}/`);
    },
    filename: (req, file, cal) => {
        cal(null, Date.now() + path.extname(file.originalname));
    }
})

const imageUpload = multer({
    storage: imageStore,
    fileFilter(req, file, cal) {

        if (!file.originalname.match(/\.(pnj|jpg)$/)) {
            return cal(new Error('Imagem so como .pnj .jpg'));
        }

        cal(undefined, true);
    }
})

module.exports = { imageUpload };