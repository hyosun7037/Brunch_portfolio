import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter} from "react-router-dom";
import Routes from "./components/Router/Routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

