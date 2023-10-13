import User from '@/types/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    users: User[];
    totalPages: number;
    totalElements: number;
    pageNum: number;
}

const ini_state: UserState = {
    users: [],
    pageNum: 0,
    totalElements: 0,
    totalPages: 0
};
const userSlice = createSlice({
    name: 'user/slice',
    initialState: ini_state,
    reducers: {
        set(state, { payload }: PayloadAction<UserState>) {
            state.users = payload.users;
            state.pageNum = payload.pageNum;
            state.totalElements = payload.totalElements;
            state.totalPages = payload.totalPages;
        },
        update(state, { payload }: PayloadAction<User>) {
            const idx = state.users.findIndex((item) => item.id === payload.id);
            state.users.splice(idx, 1, payload);
        },
        delete(state, { payload }: PayloadAction<number>) {
            const idx = state.users.findIndex((item) => item.id === payload);
            state.users.splice(idx, 1);
        },
        create(state, { payload }: PayloadAction<User>) {
            state.users.push(payload);
        }
    }
});

const UserAction = userSlice.actions;
const UserReducer = userSlice.reducer;

export { UserAction, UserReducer };
