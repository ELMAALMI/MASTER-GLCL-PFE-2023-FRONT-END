import alertService from '@/services/alert-service';
import { Alert } from '@/types/Alert';
import { httpErrorHandler } from '@/utils/httpHandler';
import { AppThunk } from '../..';
import { AlertAction } from './alert-slice';

class AlertActionThunk {
    fetch(): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const { data, totalPages, totalElements, pageNum } = await alertService.fetch();
                dispatch(
                    AlertAction.set({
                        alerts: data,
                        totalPages,
                        totalElements,
                        pageNum
                    })
                );
                return true;
            } catch (e) {
                httpErrorHandler(e);
            }
        };
    }
    create(data: Alert): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await alertService.create(data);
                dispatch(AlertAction.create(res));
            } catch (e) {
                httpErrorHandler(e);
            }
        };
    }
    update(data: Alert): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await alertService.update(data);
                dispatch(AlertAction.update(res));
            } catch (e) {
                httpErrorHandler(e);
            }
        };
    }
    delete(id: number): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await alertService.delete(id);
                dispatch(AlertAction.delete(id));
            } catch (e) {
                httpErrorHandler(e);
            }
        };
    }
}

const alertActionThunk = new AlertActionThunk();
export default alertActionThunk;
