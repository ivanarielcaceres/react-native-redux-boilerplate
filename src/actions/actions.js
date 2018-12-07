/*
 * Action types
 */
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

/*
 * Action creators
 */
export const fetchItems = items => ({
  type: FETCH_ITEMS,
  items,
});

export const addItem = item => ({
  type: ADD_ITEM,
  item,
});
