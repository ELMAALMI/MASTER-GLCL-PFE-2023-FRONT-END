import applicationService from '@/services/application-service';
import Application from '@/types/Application;';
import { ErrorAlert, SuccessAlert } from '@/utils/alerts';
import { AppThunk } from '../..';
import { ApplicationAction } from './application-slice';

class ApplicationActionThunk {
    fetch(): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const data = await applicationService.findAll();
                dispatch(ApplicationAction.set(data.data));
            } catch (e) {
                ErrorAlert('', 'we have a problem try again');
                console.log('error : ', e);
            }
        };
    }
    create(data: Application): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await applicationService.create(data);
                dispatch(ApplicationAction.create(res));
                SuccessAlert('', 'Application Created Successfully');
            } catch (e) {
                console.log('error : ', e);
                ErrorAlert('', 'we have a problem try again');
            }
        };
    }
}

const applicationActionThunk = new ApplicationActionThunk();
export default applicationActionThunk;
