import {
  PLAYER_GENERATED_POSITION, PLAYER_MOVED_DOWN, PLAYER_MOVED_LEFT, PLAYER_MOVED_RIGHT,
  PLAYER_MOVED_UP
} from './types';
import store from '../store';
import { isWall } from '../utils/square-checker';

export const generateStartPosition = () => (dispatch) => {
  const x = 2;
  const y = 11;

  dispatch({ type: PLAYER_GENERATED_POSITION, x, y });
};

export const moveRight = () => (dispatch) => {
  const { game, player } = store.getState();
  const { positionX, positionY } = player;

  if (!game.started) {
    return;
  }

  const y = positionY + 1;
  const x = positionX;

  if (isWall(x, y)) {
    return;
  }

  dispatch({ type: PLAYER_MOVED_RIGHT, x, y });
};

export const moveLeft = () => (dispatch) => {
  const { game, player } = store.getState();
  const { positionX, positionY } = player;

  if (!game.started) {
    return;
  }

  const y = positionY - 1;
  const x = positionX;

  if (isWall(x, y)) {
    return;
  }

  dispatch({ type: PLAYER_MOVED_LEFT, x, y });
};

export const moveUp = () => (dispatch) => {
  const { game, player } = store.getState();
  const { positionX, positionY } = player;

  if (!game.started) {
    return;
  }

  const y = positionY;
  const x = positionX -1;

  if (isWall(x, y)) {
    return;
  }

  dispatch({ type: PLAYER_MOVED_UP, x, y });
};

export const moveDown = () => (dispatch) => {
  const { game, player } = store.getState();
  const { positionX, positionY } = player;

  if (!game.started) {
    return;
  }

  const y = positionY;
  const x = positionX + 1;

  if (isWall(x, y)) {
    return;
  }

  dispatch({ type: PLAYER_MOVED_DOWN, x, y });
};