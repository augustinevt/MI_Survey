import { CHANGE_STAGE, UPDATE_DATA } from './actionTypes';

const changeStage = newStage => ({
  type: CHANGE_STAGE,
  newStage,
});

const updateData = newQ => ({
  type: UPDATE_DATA,
  newQ,
});

export const changeStageThunk = () => (dispatch) => {
  dispatch(changeStage(1));
}

export const updateDataThunk = (newData) => (dispatch) => {
  dispatch(updateData(newData))
}
