import Server from '@/types/Server';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ServerState {
    servers: Server[];
}

const ini_state: ServerState = {
    servers: []
};

const serverSlice = createSlice({
    name: 'server/slice',
    initialState: ini_state,
    reducers: {
        set(state, { payload }: PayloadAction<Server[]>) {
            state.servers = payload;
        },
        update(state, { payload }: PayloadAction<Server>) {
            const idx = state.servers.findIndex((item) => item.id === payload.id);
            state.servers.splice(idx, 1, payload);
        },
        delete(state, { payload }: PayloadAction<string>) {
            const idx = state.servers.findIndex((item) => item.id === payload);
            state.servers.splice(idx, 1);
        },
        create(state, { payload }: PayloadAction<Server>) {
            state.servers.push(payload);
        }
    }
});

const ServerAction = serverSlice.actions;
const ServerReducer = serverSlice.reducer;

export { ServerAction, ServerReducer };
