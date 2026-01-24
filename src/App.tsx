import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTelemetry } from "./store/telemetrySlice.ts";
import ConnectionStatus from "./components/ConnectionStatus";
import TelemetryPanel from "./components/TelemetryPanel";
import type { RootState } from "./store/index.ts";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const telemetry = useSelector((state: RootState) => state.telemetry);

  const getFuelHealth = (fuel: number) => {
    if (fuel < 20) {
      return "critical";
    } else if (fuel >= 20 && fuel < 50) {
      return "warning";
    } else {
      return "healthy";
    }
  };

  useEffect(() => {
    const dataInterval = setInterval(() => {
      const newFuel = Math.floor(Math.random() * 100);

      dispatch(setTelemetry({
        fuel: newFuel,
        power: Math.floor(Math.random() * 100),
        temperature: Math.floor(Math.random() * 150),
        fuelHealth: getFuelHealth(newFuel),
        powerHealth: "healthy",
        temperatureHealth: "warning",
      }));
    }, 2000);

    return () => {
      clearInterval(dataInterval);
    }
  }, []);

  return (
    <div className="main">
      <header className="dashboard-header">
        <h1>Mission Control</h1>
        <ConnectionStatus />
      </header>
      <div className="telemetry-grid">
        <TelemetryPanel
          label="Fuel"
          currentValue={telemetry.fuel}
          unit="%"
          healthStatus={telemetry.fuelHealth}
        />
        <TelemetryPanel
          label="Power"
          currentValue={telemetry.power}
          unit="%"
          healthStatus={telemetry.powerHealth}
        />
        <TelemetryPanel
          label="Temperature"
          currentValue={telemetry.temperature}
          unit="°F"
          healthStatus={telemetry.temperatureHealth}
        />
      </div>
    </div>
  );
}

export default App;
