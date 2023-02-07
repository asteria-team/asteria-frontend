import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import NavigationBar from "./components/nav";
import DatasetDashboard from "./components/dataset/DatasetDashboard";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App>
          <NavigationBar />
          <Switch>
            <Route path="/" component={DatasetDashboard} />
            <Route path="/datasets" component={DatasetDashboard} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>
);
