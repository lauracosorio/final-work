import React from "react";
import ReactDOM from "react-dom";

import MockService from "./Utils/mocks/mock-service";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";

MockService();

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
