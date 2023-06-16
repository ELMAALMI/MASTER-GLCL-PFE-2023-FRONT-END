import Application from '@/types/Application;';
import axios from 'axios';
class ApplicationService {
    private URI = '/applications';
    async create(data: Application) {
        const res = await axios.post(this.URI, data);
        return res.data;
    }
    async update(data: Application, id: number) {
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
const applicationService = new ApplicationService();
export default applicationService;
