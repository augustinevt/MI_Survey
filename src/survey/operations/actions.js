import { CHANGE_STAGE, UPDATE_DATA } from './actionTypes';

const changeStage = newStage => ({
  type: CHANGE_STAGE,
  newStage,
});

const updateData = newData => ({
  type: UPDATE_DATA,
  newData,
});

export const changeStageThunk = () => (dispatch) => {
  dispatch(changeStage(1));
}

export const updateDataThunk = (newData) => (dispatch) => {
  dispatch(updateData(newData))
}
