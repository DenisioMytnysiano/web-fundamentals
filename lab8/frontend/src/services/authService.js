import { handleResponse } from '../utils/handleResponse';
import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const apiUrl = process.env.API_URL || "http://localhost:4000"

class AuthService {

    static get currentUserValue(){
        return currentUserSubject.value;
    }

    static async login(username, password) {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };
    
        const response = await fetch(`${apiUrl}/api/login`, requestOptions);
        const user = await handleResponse(response);
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);
        return user;
    }

    static async register(username, password) {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };
    
        const response = await fetch(`${apiUrl}/api/register`, requestOptions);
        const user = await handleResponse(response);
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);
        return user;
    }
    static logout() {
        localStorage.removeItem('currentUser');
        currentUserSubject.next(null);
    }
}

export {AuthService};
