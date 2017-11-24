import { GAME_START, GAME_TOGGLE_LIGHT } from '../actions/types';

const { offsetHeight, offsetWidth } = document.body;
export const pixelSize = 30;

export const defaultRowNumber = Math.round((offsetHeight - 70) / pixelSize);
export const defaultColumnNumber = Math.round((offsetWidth - 19) / pixelSize);

const initialStore = {
  started: false,
  lightsOn: true,
  rows: defaultRowNumber,
  columns: defaultColumnNumber,
};

export default (state = initialStore, action) => {
  switch (action.type) {
    case GAME_TOGGLE_LIGHT:
      return {
        ...state,
        lightsOn: !state.lightsOn,
      };
    case GAME_START:
      return {
        ...state,
        started: true,
      };
    default:
      return state;
  }
}

