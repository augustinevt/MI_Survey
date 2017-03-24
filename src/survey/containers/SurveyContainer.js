import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './css/surveyContainer.css'


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
      this.props.router.push('/success')
    })

    console.log(foo)
  }

  render() {
    console.log('SC: props data', )
    return(
      <div className="survey-container">
        <div className={styles.headerContainer}>
          <h1 className={styles.header}> Monsoon Inc </h1>
        </div>
        <hr/>
        <div className={ styles.main }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
