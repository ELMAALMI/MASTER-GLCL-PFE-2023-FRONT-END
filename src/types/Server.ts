import { OperatingSystem } from './OperatingSystem';

type Server = {
    id?: string;
    name?: string;
    host?: string;
    username?: string;
    password?: string;
    os?: OperatingSystem | null;
    status?: any;
    services?: [];
};
export default Server;
