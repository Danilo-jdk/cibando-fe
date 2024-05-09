import axios from "axios";

const apiBaseUrl = '/api/users/';

export const login = async (email, password) => {
    try {
        const response = await axios.post(apiBaseUrl + 'login', {email, password});
        const userData = response.data;
        return { success: true, userData}
    } catch (error) {
        console.log("errore  nel login ", error);
        return { success: false}
    }
}