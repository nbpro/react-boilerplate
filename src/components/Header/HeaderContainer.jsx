import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import headerStyle from '../../assests/components/HeaderStyles';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, classes } = this.props;
    return (
      <header>
        <AppBar title={title || ''} className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              <span className={classes.title}>{title}</span>
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default withStyles(headerStyle)(HeaderContainer);
