import { fromJS } from 'immutable';

import * as constants from './constants';

const initialState = fromJS({
  listItem: {},
 });

export default function store(state = initialState, action) {
  const actions = action;
  switch (actions.type) {
    case constants.SET_LIST_ITEM: {
      return state.set('listItem', fromJS(actions.data));
    }
    default:
      return state;
  }
}
