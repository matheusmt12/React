import { api, requestConfig } from "../utils/config";


const insertPhoto = async (data, token) => {

    const config = requestConfig("POST", data, token, true);

    try {
        const res = await fetch(api + '/photos/', config)
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);

    }

}

const getAllPhotosUser = async (id, token) => {

    const config = requestConfig("GET", null, token);

    try {

        const res = await fetch(api + '/photos/user/' + id, config)
            .then((res => res.json()))
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);

    }


}

const deletePhoto = async (id, token) => {

    let config = requestConfig("DELETE", null, token);

    try {

        const res = await fetch(api + '/photos/' + id, config)
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);

    }

}

const updatePhoto = async (data, id, token) => {

    const config = requestConfig("PUT", data, token);

    try {
        const res = await fetch(api + '/photos/' + id, config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
}

const getPhotoId = async (id, token) => {

    const config = requestConfig("GET", null, token);

    try {
        const res = await fetch(`${api}/photos/${id}`, config)
            .then((res) => res.json())
            .catch((err) => err);

        console.log(res + ' teste');

        return res;
    } catch (error) {
        console.log(error);
    }

}

const photoLike = async (id, token) => {


    const config = requestConfig("PUT", null, token);

    try {
        const res = await fetch(api + '/photos/like/' + id, config)
            .then((res) => res.json())
            .catch((err) => err);

        console.log(res + ' service');

        return res;
    } catch (error) {
        console.log(error);
    }
}

const photoComment = async (data,id, token) => {

    const config = requestConfig("PUT", data, token);

    console.log(data);
    
    try {
        const res = await fetch(api + '/photos/comment/' + id, config)
            .then((res) => res.json())
            .catch((err) => err);
            
        return res;
    } catch (error) {
        console.log(error);
        
    }
}

const getAllPhotos = async (token) =>{


    const config = requestConfig("GET", null, token);

    try {
        const res = await fetch(api + '/photos/',config)
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
        
    }
}

const searchPhotos = async (query, token) =>{

    const config = requestConfig("GET",null, token );

    try {
        const res = await fetch(api+'/photos?q='+ query, config )
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log((error));
        
    }

}
const photoService = {
    insertPhoto,
    getAllPhotosUser,
    deletePhoto,
    updatePhoto,
    getPhotoId,
    photoLike,
    photoComment,
    getAllPhotos,
    searchPhotos,

}

export default photoService;