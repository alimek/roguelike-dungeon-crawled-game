import { renderMap } from '../utils/map-generator';

const initialStore = renderMap();

export default (store = initialStore, action) => {
  switch (action.type) {
    default:
      return store;
  }
}

