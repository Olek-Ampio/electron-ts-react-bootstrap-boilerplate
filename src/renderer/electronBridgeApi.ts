import { electronBridgeApi } from "../main/electronBridge";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const electronApi: electronBridgeApi = (window as any).electron_window.api;

export default electronApi;
