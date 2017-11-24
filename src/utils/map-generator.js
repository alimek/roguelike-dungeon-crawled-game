import { defaultColumnNumber, defaultRowNumber } from '../reducers/game';

const isBorder = (row, column) => {
  return row === 0 && column !== 0 ||
    row !== 0 && column === 0 ||
    row === 0 && column === 0 ||
    row === (defaultRowNumber - 1) && column !== (defaultColumnNumber - 1) ||
    row !== (defaultRowNumber - 1) && column === (defaultColumnNumber - 1) ||
    row === (defaultRowNumber - 1) && column === (defaultColumnNumber - 1);
};

export const renderMap = () => {
  const map = [];
  let nextSquares = 0;

  for (let currentRow = 0; currentRow < defaultRowNumber ;currentRow++) {
    const row = [];
    for (let currentColumn = 0;currentColumn < defaultColumnNumber;currentColumn++) {
      if (isBorder(currentRow, currentColumn)) {
        row.push(1);
        continue;
      }

      const randomNumber = getRandomInt(2, 9);

      if (nextSquares%randomNumber < 2) {
        row.push(1);
      } else {
        row.push(0);
      }

      nextSquares++;
    }
    map.push(row);
  }

  return map;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
