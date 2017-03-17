import { LOAD_DATA, SOME_ACTION } from './actionTypes';

const loadData = data => ({
  type: LOAD_DATA,
  data,
});

const someAction = payload => ({
  type: SOME_ACTION,
  payload,
});

export const getData = () => (dispatch) => {
  dispatch(loadData('placeholder data'));
}

export const doSomething = () => (dispatch) => {
  dispatch(someAction('placeholder payload'))
}
