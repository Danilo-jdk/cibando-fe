import axios from "axios";

const apiBaseUrl = '/api/users/';

async function insertUser(dati) {
    try {
        const response = await axios.post(apiBaseUrl + 'signup', dati);
        console.log('risposta: ', response.data);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getDetail = async (email) => {
    try {
        const response = await axios.get(apiBaseUrl + 'userDetail/' + email);
        console.log('risposta dati utente: ', response);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const UserApi = {
    insertUser: insertUser,
    getDetail: getDetail
}

export default UserApi;