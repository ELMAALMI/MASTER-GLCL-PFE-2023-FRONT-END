import Server from './Server';

export type Alert = {
    id?: number;
    name?: string;
    type?: AlertType;
    server?: Server;
};

export enum AlertType {
    INFO = 'INFO',
    ERROR = 'ERROR'
}
