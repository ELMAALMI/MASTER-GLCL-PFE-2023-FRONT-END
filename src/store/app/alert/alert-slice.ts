import { Alert } from '@/types/Alert';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
    alerts: Alert[];
    totalPages: number;
    totalElements: number;
    pageNum: number;
}

const ini_state: AlertState = {
    alerts: [],
    pageNum: 0,
    totalElements: 0,
    totalPages: 0
};
const alertSlice = createSlice({
    name: 'alerts/slice',
    initialState: ini_state,
    reducers: {
        set(state, { payload }: PayloadAction<AlertState>) {
            state.alerts = payload.alerts;
            state.pageNum = payload.pageNum;
            state.totalElements = payload.totalElements;
            state.totalPages = payload.totalPages;
        },
        update(state, { payload }: PayloadAction<Alert>) {
            const idx = state.alerts.findIndex((item) => item.id === payload.id);
            state.alerts.splice(idx, 1, payload);
        },
        delete(state, { payload }: PayloadAction<number>) {
            const idx = state.alerts.findIndex((item) => item.id === payload);
            state.alerts.splice(idx, 1);
        },
        create(state, { payload }: PayloadAction<Alert>) {
            state.alerts.push(payload);
        }
    }
});

const AlertAction = alertSlice.actions;
const AlertReducer = alertSlice.reducer;

export { AlertAction, AlertReducer };
