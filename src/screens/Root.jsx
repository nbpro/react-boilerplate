import React, { Component } from "react";
import { hot } from "react-hot-loader";

import CssBaseline from "@material-ui/core/CssBaseline";
import HeaderContainer from "../components/header-component/HeaderContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <HeaderContainer />
        render other components here
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
