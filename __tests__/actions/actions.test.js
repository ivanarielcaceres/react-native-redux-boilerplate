import * as actions from '../../src/actions/actions';

describe('actions', () => {
  it('fetchItems', () => {
    const items = ['item1', 'item2'];
    const fetchItemsCreator = {
      type: 'FETCH_ITEMS',
      items,
    };
    expect(actions.fetchItems(items)).toEqual(fetchItemsCreator);
  });

  it('addItem', () => {
    const item = 'item1';
    const addItemCreator = {
      type: 'ADD_ITEM',
      item,
    };
    expect(actions.addItem(item)).toEqual(addItemCreator);
  });
});
