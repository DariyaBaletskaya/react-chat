import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import * as serviceWorker from "./serviceWorker";

import messages from "./reducers/messages";
import modal from "./reducers/modal";

const rootReducer = combineReducers({
  messages,
  modal
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
