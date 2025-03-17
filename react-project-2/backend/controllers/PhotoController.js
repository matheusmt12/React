const Photo = require('../model/Photo');
const User = require('../model/User');


const insertPhoto = async (req, res) => {

    try {
        const { title } = req.body;
        const image = req.file.filename;

        // buscar o user 

        const userReq = req.user;

        const user = await User.findById(userReq._id);

        if (!user) {
            res.status(404).json('Usuario não encntrado');
        }

        const newPhoto = await Photo.create({
            title,
            image,
            userId: user._id,
            userName: user.name
        });

        if (!newPhoto) {
            res.status(422).json("Algo deu errado, tente mais tarde!");
        }

        res.status(201).json(newPhoto);
    } catch (error) {
        res.status(500).json(error)
    }
}


//remover foto 

const deletPhoto = async (req, res) => {

    const { id } = req.params;

    const reqUser = req.user;


    const photo = await Photo.findById(id);

    if (!photo) {
        res.status(404).json({ errors: "Foto não encontrada" });
        return;
    }

    if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({ errors: 'Este usuário não tem permissão para deletar esta foto' });
        return;
    }
    await Photo.findByIdAndDelete(photo._id);
    res.status(200).json({ id: photo._id, message: "Foto deletada com sucesso" });
}

// get all photos;

const getAllPhotos = async (req, res) => {

    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec();

    res.status(200).json(photos);
}

// get all fotos do usuário por id do usuário

const getAllPhotosIdUser = async (req, res) => {
    const { id } = req.params

    const user = await User.findById(id);

    if (!user) {
        res.status(404).json("O usuário não foi encontrado");
        return;
    }

    const photos = await Photo.find({ userId: id }).sort([['createdAt', -1]]).exec();

    res.status(200).json(photos);
}

// get foto por id

const getPhotoId = async (req, res) => {

    const { id } = req.params;
    const photo = await Photo.findById(id);

    if (!photo) {
        res.status(404).json({ errors: "Foto não encontrada" });
        return;
    }

    res.status(200).json( photo);
}


//atualizar foto *title

const updatePhoto = async (req, res) => {

    const { id } = req.params;


    const reqUser = req.user;

    const photo = await Photo.findById(id);

    const { title } = req.body;


    
    // verify if photo exist


    if (!photo) {
        res.status(404).json({ error: 'Foto não encontrada' });
        return;
    }

    // verify if photo and photo relation

    
    if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({ errors: "Esta foto não pode ser alterada!" });
        return;
    }

    if (title) {
        photo.title = title;    
    }
    await photo.save();
    res.status(200).json(photo);

}


const likePhoto = async (req, res) => {

    const { id } = req.params;

    const userReq = req.user;

    const photo = await Photo.findById(id);

    if (!photo) {
        res.status(404).json({ errors: 'A foto não foi encontrada' });
        return;
    }


    if (photo.likes.includes(userReq._id)) {
        res.status(422).json({ errors: 'voce já curtiu esta foto' });
        return;
    }

    photo.likes.push(userReq._id);

    await photo.save();

    res.status(200).json({ idPhoto: id, idUser: userReq._id, message: "A foto foi curtida" })

}


const commentPhoto = async (req, res) => {

    const { id } = req.params;
    const userReq = req.user;
    const { comment } = req.body;
    const photo = await Photo.findById(id);

    const user = await User.findById(userReq._id);

    if (!photo) {

        res.status(404).json({ errors: 'A foto não foi encontrada' });
        return;
    }


    const userComment = {
        comment, 
        idUser : user._id,
        userName : user.name,
        userImage : user.profileImg
    }

    photo.comments.push(userComment);

    await photo.save();

    res.status(200).json({comment : userComment, message : 'Comentário feito'})
}


const searchPhotos = async (req, res) =>{

    const {q} = req.query;

    const photo = await Photo.find({title : new RegExp(q,'i')}).exec();

    res.status(200).json(photo);

}

module.exports = {
    insertPhoto,
    deletPhoto,
    getAllPhotos,
    getAllPhotosIdUser,
    getPhotoId,
    updatePhoto,
    likePhoto,
    commentPhoto,
    searchPhotos
}