import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SystemAdmin from "./SystemAdmin/SystemAdmin";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <SystemAdmin />.
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
