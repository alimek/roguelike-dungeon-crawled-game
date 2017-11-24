import { GAME_START, GAME_TOGGLE_LIGHT } from './types';
import { generateStartPosition } from './player';

export const toggleLight = () => ({ type: GAME_TOGGLE_LIGHT });

export const startGame = () => (dispatch) => {
  dispatch(generateStartPosition());
  dispatch({ type: GAME_START });
};
