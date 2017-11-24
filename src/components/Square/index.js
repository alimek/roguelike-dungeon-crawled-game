import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

class Square extends React.PureComponent {
  static propTypes = {
    isWall: PropTypes.number.isRequired,
    lightsOn: PropTypes.bool.isRequired,
    isPlayerOnSquare: PropTypes.bool,
  };

  static defaultProps = {
    isPlayerOnSquare: false,
  };

  render() {
    const { isWall, lightsOn, isPlayerOnSquare } = this.props;

    return (
      <Container
        isWall={isWall}
        lightsOn={lightsOn}
        isPlayerOnSquare={isPlayerOnSquare}
      />
    );
  }
}

export default Square;
