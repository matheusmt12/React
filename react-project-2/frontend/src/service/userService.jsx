import { api, requestConfig } from '../utils/config.jsx';


//get user
const profile = async (date, token) => {

    const config = (requestConfig("GET", date, token));

    try {
        const res = await fetch(api + '/users/profile', config)
            .then((res) => res.json())
            .catch((err) => err)
        return res;

    } catch (errors) {
        console.log(errors);
    }

};

const update = async (data, token) => {

    const config = requestConfig("PUT", data, token, true);

    try {
        const res = await fetch(api + '/users/', config)
            .then((res) => res.json())
            .catch((err) => err);


        return res;


    } catch (error) {
        console.log(error);

    }

}

// get details
const details = async (id) => {

    const config = requestConfig('GET');

    try {
        const res = await fetch(api + `/users/${id}`)
                .then((res) => res.json())
                .catch((err) =>err);
        
        return res;
    } catch (error) {
        console.log(error);
        
    }


}


const userService = {
    profile,
    update,
    details
}

export default userService;