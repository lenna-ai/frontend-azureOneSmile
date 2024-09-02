import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <>
    <ToastContainer position="bottom-right" theme="light" closeOnClick />
    <App />
  </>
);
