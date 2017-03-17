import { LOAD_DATA, SOME_ACTION } from './actionTypes';
// import orderMock from '../../mockData/orderMock';

const initialState = { data: 'initial data', actionData: 'initial action data' }
const F3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, data: action.data }
    case SOME_ACTION:
      return { ...state, actionData: action.payload }
    default:
      return {...state}
  }
}

export default F3Reducer;
