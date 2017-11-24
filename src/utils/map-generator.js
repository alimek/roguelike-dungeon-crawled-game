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

  for (let currentRow = 0; currentRow < defaultRowNumber ;currentRow++) {
    const row = [];
    for (let currentColumn = 0;currentColumn < defaultColumnNumber;currentColumn++) {
      if (isBorder(currentRow, currentColumn)) {
        row.push(1);
      } else {
        row.push(Math.floor( Math.random() * ( 1 + 1 - 0 ) ));
      }
    }
    map.push(row);
  }

  return map;
};
