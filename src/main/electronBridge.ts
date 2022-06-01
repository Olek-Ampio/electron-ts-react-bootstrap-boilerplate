import { ipcRenderer, IpcRendererEvent } from "electron";

const electronBridge = {
  send(channel: string, args: unknown[]): void {
    ipcRenderer.send(channel, args);
  },
  on(channel: string, func: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      func(...args);
    ipcRenderer.on(channel, subscription);

    return () => ipcRenderer.removeListener(channel, subscription);
  },
};

export type electronBridgeApi = typeof electronBridge;

export default electronBridge;
