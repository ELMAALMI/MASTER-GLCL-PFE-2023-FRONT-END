import { combineReducers } from 'redux';
import { ApplicationReducer } from './app/application/application-slice';
import { OperatingSystemReducer } from './app/operatingSystem/operatingSystem-slice';
import { ServerReducer } from './app/server/server-slice';

const rootReducer = combineReducers({
    server: ServerReducer,
    operatingSystem: OperatingSystemReducer,
    application: ApplicationReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
