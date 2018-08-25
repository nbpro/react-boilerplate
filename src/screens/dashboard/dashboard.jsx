/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import HeaderContainer from '../../components/Header/HeaderContainer';
// core components

class DashBoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // life cycle hooks
  }
  componentDidUpdate(e) {
    // life cycle hooks
  }
  componentWillUnmount() {}
  render() {
    const appTitle = `React Boiler Plate`;
    return (
      <div>
        <HeaderContainer title={appTitle} />
      </div>
    );
  }
}

// DashBoardComponent.propTypes = {
//     classes: PropTypes.object.isRequired
// };

export default DashBoardComponent;
