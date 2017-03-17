import reducer from './operations/reducer';
import actions from './operations/actions';
import actionTypes from './operations/actionTypes';

import F3Container from './containers/F3Container';

import F3Component from './components/F3Component';

const F3Containers = {
  F3Container,
}

const F3Components = {
  F3Component,
}

export {
  reducer,
  actions,
  actionTypes,
  F3Containers,
  F3Components,
}

export default reducer;
