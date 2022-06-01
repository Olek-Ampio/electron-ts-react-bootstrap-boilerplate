import { contextBridge } from "electron";
import electronApi from "./electronBridge";

contextBridge.exposeInMainWorld("electron_window", {
  api: electronApi,
});
