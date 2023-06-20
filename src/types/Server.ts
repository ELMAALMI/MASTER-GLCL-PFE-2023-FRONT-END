import { Application } from '.';
import { OperatingSystem } from './OperatingSystem';

type Server = {
    id?: string;
    name?: string;
    host?: string;
    username?: string;
    password?: string;
    os?: OperatingSystem | null;
    status?: any;
    applications?: Application[];
};
export default Server;
