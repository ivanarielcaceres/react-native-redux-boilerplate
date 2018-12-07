import { ADD_ITEM, FETCH_ITEMS } from '../actions/actions';
import initialState from '../store/initialState';

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_ITEMS: {
    const { items } = action;
    return {
      ...state,
      items,
    };
  }
  case ADD_ITEM: {
    const items = [...state.items];
    items.push(action.item);
    return {
      ...state,
      items,
    };
  }
  default:
    return state;
  }
}
