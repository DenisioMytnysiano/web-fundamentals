import { AuthService } from '../services/authService';

export function authHeader() {
    const currentUser = AuthService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: currentUser.token };
    } else {
        return {};
    }
}