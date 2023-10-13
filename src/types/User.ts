import { Role } from './Role';

type User = {
    id?: number;
    email?: string;
    username?: string;
    password?: string;
    role?: Role;
    active?: boolean;
};

export default User;
