import authService from '@/services/auth-service';
import { Creds } from '@/types/Creds';
import { ErrorAlert } from '@/utils/alerts';
import { AppThunk } from '../..';
import { AuthAction } from './auth-slice';

class AuthActionThunk {
    login(creds: Creds): AppThunk {
        return async (dispatch, getState) => {
            try {
                await authService.login(creds);
                dispatch(this.checkAuthenticated());
                return true;
            } catch (e) {
                ErrorAlert('', "email or password don't match");
                console.log(e);
            }
        };
    }

    logout(): AppThunk {
        return async (dispatch, getState) => {
            try {
                const res = await authService.logout();
                dispatch(
                    AuthAction.setAuthenticated({
                        auth: {},
                        authenticated: false
                    })
                );
            } catch (e) {
                ErrorAlert('', 'we have a problem try again');
                console.log(e);
            }
        };
    }
    checkAuthenticated(): AppThunk {
        return async (dispatch, getState) => {
            try {
                const res = await authService.checkAuthentication();
                dispatch(
                    AuthAction.setAuthenticated({
                        auth: res,
                        authenticated: true
                    })
                );
            } catch (e) {
                ErrorAlert('', 'we have a problem try again');
                console.log(e);
            }
        };
    }
}
const authActionThunk = new AuthActionThunk();

export default authActionThunk;
