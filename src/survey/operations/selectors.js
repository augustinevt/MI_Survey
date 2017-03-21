import { createSelector } from 'reselect'

const getStage = (state) => state.stage;
const getQuestions = (state) => state.questions;

export const sectionSelector = createSelector(
  [getStage, getQuestions],
  (stage, questions) => {

    return questions.filter((question) => {
      return question.section === stage;
    })
  }
)
