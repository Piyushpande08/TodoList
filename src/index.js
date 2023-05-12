import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// React-Router-Dom using //
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
