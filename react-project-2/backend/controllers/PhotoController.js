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

    if(!photo){
        res.status(404).json({errors:"Foto não encontrada"});
        return;
    }
    
    if(!photo.userId.equals( reqUser._id)){
        res.status(422).josn({ errors: 'Este usuário não tem permissão para deletar esta foto'});
    }
    await Photo.findByIdAndDelete(photo._id);
    res.status(200).json({id : photo._id,message:"Foto deletada com sucesso"});
}

// get all photos;

const getAllPhotos = async (req,res) =>{

    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec();

    res.status(200).json({photos : photos})
}

// get all fotos do usuário por id do usuário

const getAllPhotosIdUser = async (req, res) =>{
    const {id}= req.params

    const user = await User.findById(id);

    if(!user){
        res.status(404).json("O usuário não foi encontrado");
        return;
    }

    const photos = await Photo.find({userId : id}).sort([['createdAt', -1]]).exec();
    if (photos.length <= 0) {
        res.status(200).json({message : `O usuário ${user.name} Não possui fotos`});
    }

    res.status(200).json({photo : photos});
}

// get foto por id

const getPhotoId = async (req,res) => {
    
    const {id} = req.params;

    const photo = await Photo.findById(id);

    if(!photo){
        res.status(404).json("Foto não encontrada");
    }

    res.status(200).json({photo : photo});
} 

module.exports = {
    insertPhoto,
    deletPhoto,
    getAllPhotos,
    getAllPhotosIdUser,
    getPhotoId
}