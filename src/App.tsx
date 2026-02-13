import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTelemetry } from "./store/telemetrySlice.ts";
import { setConnectionStatus } from "./store/connectionSlice";
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

  const getPowerHealth = (power: number) => {
    if (power < 30) {
      return "critical";
    } else if (power >= 30 && power < 60) {
      return "warning";
    } else {
      return "healthy";
    }
  };

  const getTemperatureHealth = (temperature: number) => {
    if (temperature > 120) {
      return "critical";
    } else if (temperature >= 90 && temperature < 120) {
      return "warning";
    } else {
      return "healthy";
    }
  };

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
      dispatch(setConnectionStatus({status: "connected"}));
    }
    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);

      dispatch(setTelemetry({
        fuel: parsedData.fuel,
        power: parsedData.power,
        temperature: parsedData.temperature,
        fuelHealth: getFuelHealth(parsedData.fuel),
        powerHealth: getPowerHealth(parsedData.power),
        temperatureHealth: getTemperatureHealth(parsedData.temperature)
      }));
    }
    ws.onclose = () => {
      dispatch(setConnectionStatus({status: "disconnected"}));
    }
    return () => {
      ws.close();
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
