import Server from '@/types/Server';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ServerState {
    servers: Server[];
    totalPages: number;
    totalElements: number;
    pageNum: number;
}

const ini_state: ServerState = {
    servers: [],
    pageNum: 0,
    totalElements: 0,
    totalPages: 0
};

const serverSlice = createSlice({
    name: 'server/slice',
    initialState: ini_state,
    reducers: {
        set(state, { payload }: PayloadAction<ServerState>) {
            state.servers = payload.servers;
            state.pageNum = payload.pageNum;
            state.totalElements = payload.totalElements;
            state.totalPages = payload.totalPages;
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
