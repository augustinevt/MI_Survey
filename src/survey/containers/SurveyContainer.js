import React from 'react';
import { connect } from 'react-redux';

import { submitData } from '../operations/actions';
// import { defaultSelector } from '../operations/selectors';

// import { ChartJSDefault } from '../charts';
// import { ControlDefault } from '../charts';

const mapStateToProps = ( state ) => {
  console.log(state)
  return { surveySections: state.surveySections }
};

const mapDispatchToProps = ({
  submitData,
})

class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  onChange(value) {
    this.props.changeF3Filter(value)
  }

  submitData() {
    this.props.submitData()
  }

  render() {
    console.log('SC: props data', this.props)
    return(
      <div>
        <h1> This is the Container </h1>
        { this.props.children }
        <hr/>
        <button onClick={ this.submitData }> Submit </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
