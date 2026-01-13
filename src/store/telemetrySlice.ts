import { createSlice } from "@reduxjs/toolkit";

type HealthStatus = "healthy" | "warning" | "critical";

interface TelemetryState {
  fuel: number;
  power: number;
  temperature: number;
  fuelHealth: HealthStatus;
  powerHealth: HealthStatus;
  temperatureHealth: HealthStatus;
}

const initialState: TelemetryState = {
  fuel: 50,
  power: 50,
  temperature: 75,
  fuelHealth: "healthy",
  powerHealth: "critical",
  temperatureHealth: "warning",
};

const telemetrySlice = createSlice({
  name: "telemetry",
  initialState,
  reducers: {
    setTelemetry: (state, action) => {
      state.fuel = action.payload.fuel;
      state.power = action.payload.power;
      state.temperature = action.payload.temperature;
      state.fuelHealth = action.payload.fuelHealth;
      state.powerHealth = action.payload.powerHealth;
      state.temperatureHealth = action.payload.temperatureHealth;
    },
  },
});

export const { setTelemetry } = telemetrySlice.actions;
export default telemetrySlice.reducer;