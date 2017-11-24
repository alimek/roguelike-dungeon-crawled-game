import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  Text,
  Button,
  DetailsContainer,
} from './styles';
import { startGame, toggleLight } from '../../actions/game';

class GameDetails extends React.PureComponent {
  static propTypes = {
    player: PropTypes.shape({
      level: PropTypes.number,
      health: PropTypes.number,
      exp: PropTypes.number,
    }).isRequired,
    actions: PropTypes.shape({
      toggleLight: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { player, actions } = this.props;
    const { level, health, exp } = player;

    return (
      <Container>
        <DetailsContainer>
          <Text>Health: {health}</Text>
          <Text>Level: {level}</Text>
          <Text>Exp: {exp}</Text>
        </DetailsContainer>
        <Button onClick={actions.toggleLight}>Toggle light</Button>
        <Button onClick={actions.startGame}>Start Game</Button>
      </Container>
    );
  }
}

export default connect(
  store => ({
    player: store.player,
  }),
  dispatch => ({
    actions: bindActionCreators({ toggleLight, startGame }, dispatch),
  }),
)(GameDetails);
