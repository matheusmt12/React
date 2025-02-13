const Photo = require('../model/Photo');
const User = require('../model/User');


const insertPhoto = async (req,res) =>{

   try {
     const {title} = req.body;
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
        userId : user._id,
        userName : user.name
    });

    if(!newPhoto){
        res.status(422).json("Algo deu errado, tente mais tarde!");    
    }

    res.status(201).json(newPhoto);
   } catch (error) {
    res.status(500).json(error)
   }
}

module.exports = {
    insertPhoto
}