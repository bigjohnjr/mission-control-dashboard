import type { RootState } from "../store";
import { useSelector } from "react-redux";
import "./ConnectionStatus.css";

export default function ConnectionStatus() {
  const status = useSelector((state: RootState) => state.connection.status);

  const handleClassChange = () =>
    status === "connecting"
      ? "status-connecting"
      : status === "connected"
      ? "status-connected"
      : "status-disconnected";


  return (
    <>
      <div className={`connection-status ${handleClassChange()}`}>{status}</div>
    </>
  );
}
