import userService from '@/services/user-service';
import User from '@/types/User';
import { ErrorAlert, SuccessAlert } from '@/utils/alerts';
import { httpErrorHandler } from '@/utils/httpHandler';
import { AppThunk } from '../..';
import { UserAction } from './user-slice';

class UserActionThunk {
    fetch(): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const { data, totalPages, totalElements, pageNum } = await userService.fetch();
                dispatch(
                    UserAction.set({
                        users: data,
                        totalPages,
                        totalElements,
                        pageNum
                    })
                );
            } catch (e) {
                console.log('error : ', e);
            }
        };
    }

    create(data: User): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await userService.create(data);
                dispatch(UserAction.create(res));
                SuccessAlert('', 'User Created Successfully');
                return true;
            } catch (e) {
                console.log('error : ', e);
                httpErrorHandler(e);
            }
        };
    }
    update(data: User): AppThunk {
        return async (dispatch, getStat) => {
            try {
                const res = await userService.update(data);
                dispatch(UserAction.update(res));
                SuccessAlert('', 'User Updated Successfully');
            } catch (e) {
                console.log('error : ', e);
                ErrorAlert('', 'we have a problem try again');
            }
        };
    }
    delete(id: number): AppThunk {
        return async (dispatch, getStat) => {
            try {
                await userService.delete(id);
                dispatch(UserAction.delete(id));
                SuccessAlert('', 'User deleted Successfully');
            } catch (e) {
                console.log('error : ', e);
                ErrorAlert('', 'we have a problem try again');
            }
        };
    }
}

const userActionThunk = new UserActionThunk();
export default userActionThunk;
