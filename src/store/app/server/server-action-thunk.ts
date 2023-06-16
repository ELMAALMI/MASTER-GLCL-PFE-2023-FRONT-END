import serverService from '@/services/serverService';
import Server from '@/types/Server';
import { ErrorAlert, SuccessAlert } from '@/utils/alerts';
import { AppThunk } from '../..';
import { ServerAction } from './server-slice';

class ServerActionThunk {
    fetch(): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const data = await serverService.findAll();
                dispatch(ServerAction.set(data.data));
            } catch (e) {
                console.log('error : ', e);
            }
        };
    }
    create(data: Server): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await serverService.create(data);
                dispatch(ServerAction.create(res));
                SuccessAlert('', 'Server Created Successfully');
            } catch (e) {
                console.log('error : ', e);
                ErrorAlert('', 'we have a problem try again');
            }
        };
    }
}

const serverActionThunk = new ServerActionThunk();
export default serverActionThunk;
