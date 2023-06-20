import User from '@/types/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean;
    user: User;
}

const ini_state: AuthState = {
    isAuthenticated: false,
    user: {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState: ini_state,
    reducers: {
        setAuthenticated(
            state,
            {
                payload: { authenticated, auth }
            }: PayloadAction<{ authenticated: boolean; auth: User }>
        ) {
            state.isAuthenticated = authenticated;
            state.user = auth;
        }
    }
});
const AuthAction = authSlice.actions;
const AuthReducer = authSlice.reducer;
export { AuthReducer, AuthAction };
