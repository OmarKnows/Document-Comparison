import { createRoot } from "react-dom/client";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "http://localhost:5000/";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);

window.electron.ipcRenderer.once("ipc-example", (arg) => {
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage("ipc-example", ["ping"]);
