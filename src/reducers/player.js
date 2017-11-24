import {
  PLAYER_GENERATED_POSITION, PLAYER_MOVED_DOWN, PLAYER_MOVED_LEFT, PLAYER_MOVED_RIGHT,
  PLAYER_MOVED_UP
} from '../actions/types';

const initialStore = {
  health: 100,
  level: 1,
  weapon: 'simple',
  positionX: null,
  positionY: null,
  exp: 0,
};

export default (state = initialStore, action) => {
  switch (action.type) {
    case PLAYER_GENERATED_POSITION:
      return {
        ...state,
        positionX: action.x,
        positionY: action.y,
      };
    case PLAYER_MOVED_LEFT:
      return {
        ...state,
        positionY: action.y,
      };
    case PLAYER_MOVED_RIGHT:
      return {
        ...state,
        positionY: action.y,
      };
    case PLAYER_MOVED_UP:
      return {
        ...state,
        positionX: action.x,
      };
    case PLAYER_MOVED_DOWN:
      return {
        ...state,
        positionX: action.x,
      };
    default:
      return state;
  }
};