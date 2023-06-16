import axios from 'axios';
import { Server } from '@/types/index';

class ServerService {
    private URI = '/servers';
    async create(data: Server) {
        const res = await axios.post(this.URI, data);
        return res.data;
    }
    async update(data: Server, id: number) {
        const res = await axios.put(this.URI + '/' + id, data);
        return res.data;
    }
    async delete(id: number) {
        await axios.delete(this.URI + '/' + id);
    }
    async findAll() {
        const res = await axios.get(this.URI);
        return res.data;
    }
}
const serverService = new ServerService();

export default serverService;
