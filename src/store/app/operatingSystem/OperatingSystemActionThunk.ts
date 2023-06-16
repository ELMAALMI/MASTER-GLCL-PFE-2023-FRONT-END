import operatingSystemService from '@/services/operating-system-service';
import { OperatingSystem } from '@/types/OperatingSystem';
import { ErrorAlert, SuccessAlert } from '@/utils/alerts';
import { AppThunk } from '../..';
import { OperatingSystemAction } from './operatingSystem-slice';

class OperatingSystemActionThunk {
    fetch(): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await operatingSystemService.findAll();
                dispatch(OperatingSystemAction.set(res));
            } catch (e) {
                console.log('error : ', e);
                ErrorAlert('', 'we have a problem try again');
            }
        };
    }
    create(data: OperatingSystem): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await operatingSystemService.create(data);
                dispatch(OperatingSystemAction.create(res));
                SuccessAlert('', 'Operating system Created Successfully');
            } catch (e) {
                console.log('error : ', e);
                ErrorAlert('', 'we have a problem try again');
            }
        };
    }
}
const operatingSystemActionThunk = new OperatingSystemActionThunk();
export default operatingSystemActionThunk;
