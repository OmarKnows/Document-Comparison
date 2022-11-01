import { createRoot } from "react-dom/client";
import axios from "axios";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../store";

axios.defaults.baseURL = "http://localhost:5000/";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

window.electron.ipcRenderer.once("ipc-example", (arg) => {
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage("ipc-example", ["ping"]);
