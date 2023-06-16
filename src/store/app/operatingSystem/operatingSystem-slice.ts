import { OperatingSystem } from '@/types/OperatingSystem';
import Server from '@/types/Server';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OperatingSystemState {
    operatingSystems: OperatingSystem[];
}

const ini_state: OperatingSystemState = {
    operatingSystems: []
};

const OperatingSystemSlice = createSlice({
    name: 'operatingSystem/slice',
    initialState: ini_state,
    reducers: {
        set(state, { payload }: PayloadAction<OperatingSystem[]>) {
            state.operatingSystems = payload;
        },
        update(state, { payload }: PayloadAction<OperatingSystem>) {
            const idx = state.operatingSystems.findIndex((item) => item.id === payload.id);
            state.operatingSystems.splice(idx, 1, payload);
        },
        delete(state, { payload }: PayloadAction<number>) {
            const idx = state.operatingSystems.findIndex((item) => item.id === payload);
            state.operatingSystems.splice(idx, 1);
        },
        create(state, { payload }: PayloadAction<OperatingSystem>) {
            state.operatingSystems.push(payload);
        }
    }
});

const OperatingSystemAction = OperatingSystemSlice.actions;
const OperatingSystemReducer = OperatingSystemSlice.reducer;

export { OperatingSystemAction, OperatingSystemReducer };
