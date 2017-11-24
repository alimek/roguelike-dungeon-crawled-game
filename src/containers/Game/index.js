import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { debounce } from 'lodash';

import { MapRow, GameDetails } from '../../containers';

import {
  Container,
  GameMap,
} from './styles';
import { moveDown, moveLeft, moveRight, moveUp } from '../../actions/player';

const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_LEFT = 37;

class Game extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      moveUp: PropTypes.func.isRequired,
      moveDown: PropTypes.func.isRequired,
      moveLeft: PropTypes.func.isRequired,
      moveRight: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    document.addEventListener('keydown', debounce(this.onKeyPressed, 10));
  }

  onKeyPressed = (event) => {
    const { actions } = this.props;

    switch (event.keyCode) {
      case KEY_DOWN:
        actions.moveDown();
        break;
      case KEY_LEFT:
        actions.moveLeft();
        break;
      case KEY_RIGHT:
        actions.moveRight();
        break;
      case KEY_UP:
        actions.moveUp();
        break;
      default:
        break;
    }
  };

  render() {
    const { map } = this.props;

    console.log('render game');
    return (
      <Container>
        <GameDetails />
        <GameMap>
          {
            map.map((row, index) => (
              <MapRow items={row} rowNumber={index} key={index} />
            ))
          }
        </GameMap>
      </Container>
    );
  }
}

export default connect(
  store => ({
    map: store.map,
  }),
  dispatch => ({
    actions: bindActionCreators({ moveRight, moveLeft, moveUp, moveDown }, dispatch),
  }),
)(Game);
