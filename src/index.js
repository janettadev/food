import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Authcontext from "./context/Authcontext";
import { BrowserRouter } from "react-router-dom";
import Productcontext from "./context/Productcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Productcontext>
      <Authcontext>
        <App />
      </Authcontext>
    </Productcontext>
  </BrowserRouter>
);
