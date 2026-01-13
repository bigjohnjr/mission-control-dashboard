import "./TelemetryPanel.css";

interface TelemetryPanelProps {
  label: string;
  currentValue: number;
  unit: "°F" | "°C" | "%";
  healthStatus: "healthy" | "warning" | "critical";
}

export default function TelemetryPanel({
  label,
  currentValue,
  unit,
  healthStatus,
}: TelemetryPanelProps) {
  const healthStatusClass = () =>
    healthStatus === "healthy"
      ? "status-healthy"
      : healthStatus === "warning"
      ? "status-warning"
      : "status-critical";

  return (
    <div className={`telemetry-panel ${healthStatusClass()}`}>
      <span className="telemetry-label">{label}</span>
      <span className="telemetry-value">
        {currentValue}
        {unit}
      </span>
    </div>
  );
}
