import "./App.css";
import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://changeme";

class App extends React.Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default withRouter(App);
