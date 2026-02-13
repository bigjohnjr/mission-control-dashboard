import { createSlice } from "@reduxjs/toolkit";

type ConnectionStatus = "connecting" | "connected" | "disconnected";

interface ConnectionState {
  status: ConnectionStatus;
}

const initialState: ConnectionState = {
  status: "disconnected",
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setConnectionStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const { setConnectionStatus } = connectionSlice.actions;
export default connectionSlice.reducer;
