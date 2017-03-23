import { createSelector } from 'reselect'

const getStage = (state) => state.stage;
const getSections = (state) => state.sections;
const getQuestions = (state) => state.questions;

export const sectionSelector = createSelector(
  [getStage, getQuestions, getSections],
  (stage, questions, sections) => {

    const currentSection = sections.filter((section, id) => {
      return section.id === stage;
    })[0];

    const sectionQuestions = questions.filter((question) => {
      return question.section === stage;
    })

    currentSection.questions = sectionQuestions;

    console.log("in selector", currentSection)

    return currentSection;
  }
)
