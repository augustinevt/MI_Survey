import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './surveyContainer.css';

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
    const foo = this.props.submitData().then((res) => {
      console.log("from the SurveyContainer... SUCCESS!", res)

    })

    console.log(foo)
  }

  render() {
    console.log('SC: props data', styles)
    return(
      <div>
        <h1> This is the Container </h1>
        <ReactCSSTransitionGroup
        transitionName={{
          appear: styles.bar,
          appearActive: styles.foo,
        }}
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false}>
          <h1>Fading at Initial Mount</h1>
        </ReactCSSTransitionGroup>
          { this.props.children }
        <hr/>
        <button onClick={ this.submitData }> Submit </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
