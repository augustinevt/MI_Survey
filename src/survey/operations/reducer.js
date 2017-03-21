import { CHANGE_STAGE, UPDATE_DATA } from './actionTypes';
// import surveySections from '../../../mockData/questions';
const surveySections = [
  {
    title: 'StageOne',
    qestions: [
      {
        prompt: 'What is Your Favorite Color?',
        type: 'text',
        response: false,
      },
      {
        prompt: 'What do you want to sell?',
        type: 'select',
        options: [
          {
            label: 'General Merchendise',
            value: false,
          },
          {
            label: 'Media',
            value: false,
          },
        ]
      }
    ]
  },
  {
    title: 'StageTwo',
    qestions: [
      {
        prompt: 'What is Your Favorite Color?',
        type: 'select',
        options: [
          {
            label: 'red',
            value: false,
          },
          {
            label: 'green',
            value: false,
          },
          {
            label: 'blue',
            value: false,
          },
          {
            label: 'Yellow',
            value: false,
          },
        ]
      },
      {
        prompt: 'What is Your Favorite Color?',
        type: 'text',
        response: false,
      }
    ]
  }
]


//// Real Stuff


const initialState = { surveySections, stage: 0 }

const F3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STAGE:
      console.log("in Change_Stage", action.newStage)
      return { ...state, stage: action.newStage }
    case UPDATE_DATA:
    console.log("updateData")
      return { ...state, actionData: action.payload }
    default:
      return {...state}
  }
}

export default F3Reducer;
