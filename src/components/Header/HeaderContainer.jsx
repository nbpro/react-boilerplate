import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import headerStyle from '../../assests/components/HeaderStyles';

const styles = {
  appBar: {
    position: 'fixed',
    zIndex: 2,
    zDepth: 2,
    top: 0,
    height: 64
  },
  appBarMenu_docked: {
    marginRight: '256px'
  },
  appBarMenu_undocked: {
    marginRight: '0px'
  }
};

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <header>
        <AppBar title={title || 'my application'} style={styles.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default withStyles(headerStyle)(HeaderContainer);
