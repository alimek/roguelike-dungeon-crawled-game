import store from '../store';

export const isWall = (x, y) => {
  const { map } = store.getState();

  return map[x][y] === 1;
};