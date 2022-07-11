import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/_main.scss";
import SrollToTop from "./components/scrolltotop";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
