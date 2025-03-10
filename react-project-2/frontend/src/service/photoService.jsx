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

const photoService = {
    insertPhoto,
    getAllPhotosUser,
    deletePhoto,
    updatePhoto
}

export default photoService;