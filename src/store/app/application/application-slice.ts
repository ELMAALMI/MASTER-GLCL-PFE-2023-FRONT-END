import Application from '@/types/Application;';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ApplicationState {
    applications: Application[];
}

const ini_state: ApplicationState = {
    applications: []
};

const ApplicationSlice = createSlice({
    name: 'ApplicationSlice/slice',
    initialState: ini_state,
    reducers: {
        set(state, { payload }: PayloadAction<Application[]>) {
            state.applications = payload;
        },
        update(state, { payload }: PayloadAction<Application>) {
            const idx = state.applications.findIndex((item) => item.id === payload.id);
            state.applications.splice(idx, 1, payload);
        },
        delete(state, { payload }: PayloadAction<number>) {
            const idx = state.applications.findIndex((item) => item.id === payload);
            state.applications.splice(idx, 1);
        },
        create(state, { payload }: PayloadAction<Application>) {
            state.applications.push(payload);
        }
    }
});

const ApplicationAction = ApplicationSlice.actions;
const ApplicationReducer = ApplicationSlice.reducer;

export { ApplicationReducer, ApplicationAction };
