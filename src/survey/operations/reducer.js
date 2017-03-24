import { CHANGE_STAGE, UPDATE_DATA, UPDATE_USER } from './actionTypes';
// import surveySections from '../../../mockData/questions';
const sections = [
  {
    title: 'Section One',
    id: 1,
    qestions: []
  },
  {
    title: 'Section Two',
    id: 2,
    qestions: []
  },
  {
    title: 'Section Three',
    id: 3,
    qestions: []
  }
]


const initialQuestions = [
  {
    id: 0,
    title: "Are you interested in selling on Walmart?",
    type: 'singleSelect',
    section: 1,
    response: [
      {
        label: 'Yes',
        value: false,
      },
      {
        label: 'No',
        value: false,
      },
    ]
  },
  {
    id: 1,
    title: "Please tell us why...",
    type: 'text',
    section: 1,
    response: '',
  },{
    id: 7,
    title: "What would you like to Sell?",
    type: 'select',
    section: 2,
    response: [
      {
        label: 'Used EGM',
        value: false,
      },
      {
        label: 'Used Media',
        value: false,
      },
      {
        label: 'Old Socks',
        value: false,
      },
      {
        label: 'New EGM',
        value: false,
      },
    ]
  },{
    id: 3,
    title: "Tell us more about what you want to sell...",
    type: 'text',
    section: 2,
    response: '',
  },{
    id: 8,
    title: "When would you like to start selling?",
    type: 'singleSelect',
    section: 3,
    response: [
      {
        label: '1-2 months',
        value: false,
      },
      {
        label: '3-4 months',
        value: false,
      },
      {
        label: '7 years',
        value: false,
      },
    ]
  },{
    id: 6,
    title: "Stage One Text",
    type: 'text',
    section: 3,
    response: '',
  },
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

const initialState = { sections, user: initUser, stage: 1, questions: initialQuestions }

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
