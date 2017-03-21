import { CHANGE_STAGE, UPDATE_DATA } from './actionTypes';

const changeStage = newStage => ({
  type: CHANGE_STAGE,
  newStage,
});

const updateData = newQ => ({
  type: UPDATE_DATA,
  newQ,
});

export const changeStageThunk = (value) => (dispatch) => {
  dispatch(changeStage(value));
}

export const updateDataThunk = (newData) => (dispatch) => {
  dispatch(updateData(newData))
}
