import {
  FETCH_ITEMS, ADD_ITEM, fetchItems, addItem,
} from '../../src/actions/actions';
import reducer from '../../src/reducers/reducer';

describe('FETCH ITEMS', () => {
  let initialState;
  let stateA;
  beforeEach(() => {
    items = ['item1', 'item2', 'item3'];
    initialState = reducer(undefined, {});
    stateA = reducer(initialState, fetchItems(items));
  });
  it('initial state', () => {
    expect(initialState).not.toBeNull();
    expect(initialState).toBeDefined();
    expect(initialState.items).toBeDefined();
    expect(initialState.items.length).toBe(0);
  });
  it('after fetch items', () => {
    expect(stateA.items.length).toBe(3);
  });
});

describe('ADD ITEMS', () => {
  let initialState;
  let stateA;
  let stateB;
  let stateC;
  beforeEach(() => {
    items = ['item1', 'item2', 'item3'];
    initialState = reducer(undefined, {});
    stateA = reducer(initialState, fetchItems(items));
  });
  it('After add more 3 items', () => {
    stateB = reducer(stateA, addItem('item4'));
    stateC = reducer(stateB, addItem('item5'));
    expect(stateC.items.length).toBe(5);
  });
});

