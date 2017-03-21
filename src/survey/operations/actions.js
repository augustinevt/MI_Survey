import { CHANGE_STAGE, UPDATE_DATA, UPDATE_USER } from './actionTypes';

const changeStage = newStage => ({
  type: CHANGE_STAGE,
  newStage,
});

const updateData = newQ => ({
  type: UPDATE_DATA,
  newQ,
});

const updateUser = newData => ({
  type: UPDATE_USER,
  newData,
});

export const changeStageThunk = (value) => (dispatch) => {
  dispatch(changeStage(value));
}

export const updateDataThunk = (newData) => (dispatch) => {
  dispatch(updateData(newData))
}

export const updateUserThunk = (newData) => (dispatch) => {
  dispatch(updateUser(newData))
}
