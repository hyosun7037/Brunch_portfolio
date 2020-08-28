import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import Routes from "./components/Router/Routes";
import rootReducer from "modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes />
        {/* <App /> */}
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
