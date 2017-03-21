import { createSelector } from 'reselect'

const getStage = (state) => state.stage;
const getSections = (state) => state.surveySections;

export const sectionSelector = createSelector(
  [getStage, getSections],
  (stage, sections) => {
    console.log(stage, sections[stage]);
    return sections[stage];
  }
)
