import { CHANGE_STAGE, UPDATE_DATA, UPDATE_USER } from './actionTypes';
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
    id: 0,
    title: "Stage Once Select",
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
    id: 1,
    title: "Stage One Select?",
    type: 'text',
    section: 1,
    response: '',
  },
  {
    id: 2,
    title: "Stage Two Select",
    type: 'select',
    section: 2,
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
    id: 3,
    title: "Stage Two Text",
    type: 'text',
    section: 2,
    response: '',
  },
  {
    id: 4,
    title: "Stage Three Select",
    type: 'select',
    section: 3,
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
    id: 5,
    title: "Stage Three Select",
    type: 'text',
    section: 3,
    response: '',
  }
]

const initUser = {
  name: '',
  phone: '',
  company: '',
  email: '',
}

//// Real Stuff

function questions(state = [], action) {
  switch (action.type) {
    case UPDATE_DATA:
    return state.map((question, index) => {
       if (question.id === action.newQ.id) {
         return Object.assign({}, question, action.newQ)
       }
       return question
     })
    default:
      return state
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, action.newData)
    default:
      return state
  }
}

const initialState = { surveySections, user: initUser, stage: 1, questions: initialQuestions }

const F3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STAGE:
      console.log("in Change_Stage", action.newStage)
      return { ...state, stage: action.newStage }

    case UPDATE_DATA:
      return Object.assign({}, state, {
       questions: questions(state.questions, action)
     })

    case UPDATE_USER:
      return Object.assign({}, state, {
       user: user(state.user, action)
     })

    default:
      console.log("THIS IS THE INITIAL STATE", state)
      return {...state}
  }
}

export default F3Reducer;
