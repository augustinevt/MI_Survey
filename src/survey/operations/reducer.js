import { CHANGE_STAGE, UPDATE_DATA, UPDATE_USER, GET_USER } from './actionTypes';
// import surveySections from '../../../mockData/questions';
const sections = [
  {
    title: 'Monsoon and Walmart Integration Survey',
    id: 1,
    qestions: []
  },
  {
    title: 'Monsoon and Walmart Integration Survey',
    id: 2,
    qestions: []
  },
  {
    title: 'Monsoon and Walmart Integration Survey',
    id: 3,
    qestions: []
  }
]


const initialQuestions = [
  {
    id: 0,
    title: "Do you currently sell on the Walmart marketplace?",
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
    ],
  },
  {
    id: 1,
    title: "Are you interested in being one of our VIP pilot customers for the Monsoon and Walmart marketplace integration?",
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
    ],
  },{
    id: 3,
    title: "Why are you interested in selling on the Walmart marketplace?",
    type: 'text',
    section: 2,
    response: '',
  },{
    id: 7,
    title: "When do you want to start selling on the Walmart marketplace?",
    type: 'select',
    section: 2,
    response: [
      {
        label: '< 1 Month',
        value: false,
      },
      {
        label: '1 to 2 months',
        value: false,
      },
      {
        label: '2 to 4 months',
        value: false,
      },
      {
        label: '4 to 6 months',
        value: false,
      },
    ]
  },{
    id: 8,
    title: "How do you expect the Walmart marketplace to rank among the other channels that you currently sell products on?",
    type: 'singleSelect',
    section: 3,
    response: [
      {
        label: '1st',
        value: false,
      },
      {
        label: '2nd - 5th',
        value: false,
      },
      {
        label: '5th - 10th',
        value: false,
      },
      // {
      //   label: 'Top Ten Channels',
      //   value: false,
      // },
    ]
  },{
    id: 6,
    title: "What’s your estimated GMV for the Walmart marketplace in 2017?",
    type: 'number',
    section: 3,
    response: '',
  },
]

const initUser = {
  name: '',
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

    case GET_USER:
      const {company, name, email } = action.user;

      return { ...state, user: {company, name, email}}
    default:
      console.log("THIS IS THE INITIAL STATE", state)
      return {...state}
  }
}

export default F3Reducer;
