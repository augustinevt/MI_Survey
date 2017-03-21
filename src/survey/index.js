import reducer from './operations/reducer';
import actions from './operations/actions';
import actionTypes from './operations/actionTypes';

import SurveyContainer from './containers/SurveyContainer';
import SectionContainer from './containers/SectionContainer';

import SurveyComponent from './components/SurveyComponent';

const surveyContainers = {
  SurveyContainer,
  SectionContainer,
}

const surveyComponents = {
  SurveyComponent,
}

export {
  reducer,
  actions,
  actionTypes,
  surveyContainers,
  surveyComponents,
}

export default reducer;
