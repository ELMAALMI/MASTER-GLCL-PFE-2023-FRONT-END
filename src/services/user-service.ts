import User from '@/types/User';
import axios from 'axios';

class UserService {
    private URI = '/users';
    async create(data: User) {
        const res = await axios.post(this.URI, data);
        return res.data;
    }
    async update(data: User) {
        const res = await axios.put(this.URI + '/' + data.id, data);
        return res.data;
    }
    async delete(id: number) {
        const res = await axios.delete(this.URI + '/' + id);
        return res.data;
    }
    async fetch() {
        const res = await axios.get(this.URI);
        return res.data;
    }
}

const userService = new UserService();
export default userService;
