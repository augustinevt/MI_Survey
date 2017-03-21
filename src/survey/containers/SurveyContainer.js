import React from 'react';
import { connect } from 'react-redux';

import { getData, doSomething } from '../operations/actions';
// import { defaultSelector } from '../operations/selectors';

// import { ChartJSDefault } from '../charts';
// import { ControlDefault } from '../charts';

const mapStateToProps = ( state ) => {
  console.log(state)
  return { surveySections: state.surveySections }
};

const mapDispatchToProps = ({
  getData,
  doSomething,
})

class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.changeF3Filter(value)
  }

  render() {
    console.log('SC: props data', this.props)
    return(
      <div>
        <h1> This is the Container </h1>
        { this.props.children }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
