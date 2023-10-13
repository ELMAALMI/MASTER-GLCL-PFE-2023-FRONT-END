import { Alert } from '@/types/Alert';
import axios from 'axios';

class AlertSrvice {
    private URI = '/alerts';

    async create(data: Alert) {
        const res = await axios.post(this.URI, data);
        return res.data;
    }
    async update(data: Alert) {
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
const alertService = new AlertSrvice();

export default alertService;
