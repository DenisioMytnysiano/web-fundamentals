import { authHeader } from '../utils/authHeader';
import { handleResponse } from '../utils/handleResponse';

const apiUrl = process.env.API_URL || "http://localhost:4000"

class UserService {
    static getAll() {
        const requestOptions = { method: 'GET', headers: authHeader() };
        return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
    }

    static getUserInfo() {
        const requestOptions = { method: 'GET', headers: authHeader() };
        return fetch(`${apiUrl}/user`, requestOptions).then(handleResponse);
    }
}

export {UserService};