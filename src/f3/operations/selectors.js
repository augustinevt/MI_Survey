import { createSelector } from 'reselect'

const getData = (state) => state.data;
const getActionData = (state) => state.actionData;

export const defaultSelector = createSelector(
  [getData, getActionData],
  (data, actionData) => {
    console.log(data, actionData);
    return 'Placeholder Selector Return Data';
  }
)
