import { combineReducers } from 'redux';
import { AlertReducer } from './app/alert/alert-slice';
import { ApplicationReducer } from './app/application/application-slice';
import { AuthReducer } from './app/auth/auth-slice';
import { OperatingSystemReducer } from './app/operatingSystem/operatingSystem-slice';
import { ServerReducer } from './app/server/server-slice';
import { UserReducer } from './app/user/user-slice';

const rootReducer = combineReducers({
    server: ServerReducer,
    operatingSystem: OperatingSystemReducer,
    application: ApplicationReducer,
    auth: AuthReducer,
    user: UserReducer,
    alert: AlertReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
