import { createSelector } from 'reselect';
const domain = state => state;

export const selectListItem = () => createSelector(
  domain,
  substate => substate.get('listItem').toJS(),
);
