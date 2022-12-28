import { AuthService } from '../services/authService';

export function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                AuthService.logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}