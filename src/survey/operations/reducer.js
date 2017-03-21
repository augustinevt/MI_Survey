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


const initialQuestions = [
  {
    id: 1,
    title: "What is this?",
    type: 'select',
    section: 1,
    response: [
      {
        label: 'A button',
        value: false,
      },
      {
        label: 'A Pipe',
        value: false,
      },
    ]
  },
  {
    id: 2,
    title: "Text Question?",
    type: 'text',
    section: 1,
    response: '',
  }
]

//// Real Stuff

function questions(state = [], action) {
  switch (action.type) {
    case UPDATE_DATA:
    return state.map((question, index) => {
      console.log('THIS IS FOR TEXT IN QUESTIONS', action.newQ)
       if (question.id === action.newQ.id) {
         // Copy the object before mutating
         return Object.assign({}, question, action.newQ)
       }
       return question
     })
    default:
      return state
  }
}



const initialState = { surveySections, foo: 'fee', stage: 0, questions: initialQuestions }

const F3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STAGE:
      console.log("in Change_Stage", action.newStage)
      return { ...state, stage: action.newStage }

    case UPDATE_DATA:
      return Object.assign({}, state, {
       questions: questions(state.questions, action)
     })

    default:
      console.log("THIS IS THE INITIAL STATE", state)
      return {...state}
  }
}

export default F3Reducer;
