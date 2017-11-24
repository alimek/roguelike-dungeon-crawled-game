import styled from 'styled-components';
import { pixelSize } from '../../reducers/game';


const getSquareColor = (props) => {
  const { theme, isWall, lightsOn, isPlayerOnSquare } = props;

  if (isPlayerOnSquare) {
    return '#0042ff';
  }

  if (!lightsOn) {
    return '#000000';
  }

  return isWall ? theme.wallColor : '#ffffff';
};

export const Container = styled.div`
  width: ${pixelSize}px;
  height: ${pixelSize}px;
  display: flex;
  background-color: ${props => getSquareColor(props)};
  justify-content: center;
  align-items: center;
`;