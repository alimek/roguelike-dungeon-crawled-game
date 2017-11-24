import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Square } from '../../components';

const isWall = (nextProps) => nextProps.isWall === 1;
const hasLightChanged = (oldProps, nextProps) => oldProps.lightsOn !== nextProps.lightsOn;

const isPlayerSquare = (player, x, y) => {
  const { positionX, positionY } = player;

  return positionY === y && positionX === x;
};

const isLeftFromPlayer = (player, x, y) => {
  const { positionX, positionY } = player;

  return positionX === x && positionY === y - 1;
};

const isRightFromPlayer = (player, x, y) => {
  const { positionX, positionY } = player;

  return positionX === x && positionY === y + 1;
};

const isUpFromPlayer = (player, x, y) => {
  const { positionX, positionY } = player;

  return positionY === y && positionX === x - 1;
};

const isDownFromPlayer = (player, x, y) => {
  const { positionX, positionY } = player;

  return positionY === y && positionX === x + 1;
};

const isAroundPlayer = (oldProps, nextProps) => {
  const { player, x, y } = nextProps;

  return isLeftFromPlayer(player, x, y) ||
    isPlayerSquare(player, x, y) ||
    isRightFromPlayer(player, x, y) ||
    isUpFromPlayer(player, x, y) ||
    isDownFromPlayer(player, x, y);
};

class MapSquare extends React.Component {
  static propTypes = {
    isWall: PropTypes.number.isRequired,
    lightsOn: PropTypes.bool.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    player: PropTypes.shape({
      positionX: PropTypes.number,
      positionY: PropTypes.number,
    }).isRequired,
  };

  shouldComponentUpdate(nextProps) {
    const oldProps = this.props;

    if (hasLightChanged(oldProps, nextProps)) {
      return true;
    }

    if (!isAroundPlayer(oldProps, nextProps)) {
      return false;
    }

    if (isWall(nextProps)) {
      return false;
    }

    return true;
  }

  render() {
    const { isWall, lightsOn, x, y, player } = this.props;
    const { positionX, positionY } = player;

    const isPlayerOnSquare = x === positionX && y === positionY;

    return (
      <Square
        isWall={isWall}
        lightsOn={lightsOn}
        x={x}
        y={y}
        isPlayerOnSquare={isPlayerOnSquare}
      />
    );
  }
}

export default connect(
  store => ({
    lightsOn: store.game.lightsOn,
    player: store.player,
  }),
)(MapSquare);
