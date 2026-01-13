import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { cycleStatus } from "../store/connectionSlice";
import "./ConnectionStatus.css";

// type ConnectionStatus = "connecting" | "connected" | "disconnected";

export default function ConnectionStatus() {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.connection.status);

  const handleClassChange = () =>
    status === "connecting"
      ? "status-connecting"
      : status === "connected"
      ? "status-connected"
      : "status-disconnected";

  function handleStatusChange() {
    dispatch(cycleStatus());
  }

  return (
    <>
      <div className={`connection-status ${handleClassChange()}`}>{status}</div>
      <button onClick={handleStatusChange}></button>
    </>
  );
}
