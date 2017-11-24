import React from 'react';
import PropTypes from 'prop-types';

import { MapSquare } from '../../containers';
import {
  Container,
} from './styles';

class MapRow extends React.PureComponent {
  static propTypes = {
    rowNumber: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  render() {
    const { items, rowNumber } = this.props;

    console.log('render row');
    return (
      <Container>
        {
          items.map((square, index) => (
            <MapSquare
              x={rowNumber}
              y={index}
              isWall={square}
              key={index}
            />
          ))
        }
      </Container>
    );
  }
}

export default MapRow;
