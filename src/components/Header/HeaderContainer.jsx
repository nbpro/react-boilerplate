import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar />
        </AppBar>
      </div>
    );
  }
}

export default HeaderContainer;
