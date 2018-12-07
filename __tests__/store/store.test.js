import store from '../../src/store/store';
import initialState from '../../src/store/initialState';

describe('', () => {
  it('verify if the store works', () => {
    expect(store.getState()).toEqual(initialState);
  });
});
