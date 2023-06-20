import { Creds } from '@/types/Creds';
import axios from 'axios';

class AuthService {
    private URI = '/auth';
    async login(creds: Creds) {
        const res = await axios.post(this.URI + '/login', creds);
        return res.data;
    }
    async checkAuthentication() {
        const res = await axios.post(this.URI + '/check-authentication');
        return res.data;
    }
    async logout() {
        const res = await axios.post(this.URI + '/logout');
        return res.data;
    }
}

const authService = new AuthService();
export default authService;
