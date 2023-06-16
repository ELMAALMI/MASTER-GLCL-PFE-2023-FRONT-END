import axios from 'axios';
import { OperatingSystem } from '@/types/OperatingSystem';

class OperatingSystemService {
    private URI = '/operating-system';
    async create(data: OperatingSystem) {
        const res = await axios.post(this.URI, data);
        return res.data;
    }
    async update(data: OperatingSystem, id: number) {
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
const operatingSystemService = new OperatingSystemService();

export default operatingSystemService;
