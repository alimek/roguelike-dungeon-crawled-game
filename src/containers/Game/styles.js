import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.gameBackground};
`;

export const GameMap = styled.div`
  flex: 1;
`;
