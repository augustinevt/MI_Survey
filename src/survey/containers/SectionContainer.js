import React from 'react';
import { connect } from 'react-redux';

import { changeStageThunk, updateDataThunk, submitData } from '../operations/actions';
import { sectionSelector } from '../operations/selectors';

import SelectQuestion from '../components/SelectQuestion'
import TextQuestion from '../components/TextQuestion';

import styles from './css/sectionContainer.css';

const mapStateToProps = ( state ) => {
  console.log(state)
  return { section: sectionSelector(state), stage: state.stage, questions: state.questions }
};

const mapDispatchToProps = ({
  changeStageThunk,
  updateDataThunk,
  submitData,
})

class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSectionChange = this.onSectionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.onNext = this.onNext.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSectionChange(val) {
    console.log('FOOO')
    this.props.changeStageThunk( this.props.stage + val)
  }

  onNext() {
    if ((this.props.stage + 1 ) <= 3) {
      this.onSectionChange(1)
    }
  }

  onSubmit() {
    this.props.submitData().then(() => {    
      this.props.router.push('/success')
    });
  }

  onBack() {

    if ((this.props.stage -1 ) < 1) {
      this.props.router.push('/')
    } else {
      this.onSectionChange(-1)
    }

  }

  handleChange(newQ, qId) {
    console.log("CHANGE HANDLED", newQ, qId);
    this.props.updateDataThunk(newQ)
  }

  render() {
    console.log('SecCon: props data', this.props)

    const navButtons = (
      <div className={styles.buttons}>
        <div className={styles.button} value={3} onClick={ this.onBack }> back </div>
        <div className={styles.button} value={3} onClick={ this.onNext }> next </div>
      </div>
    )

    const submit = (
      <div className={styles.buttons}>
        <div className={styles.button} value={3} onClick={ this.onBack }> back </div>
        <div className={styles.button} value={3} onClick={ this.onSubmit }> Submit </div>
      </div>
    )

    const buttons = this.props.stage !== 3 ? navButtons : submit;

    return(
      <div>
        <h1 onClick={ this.onSectionChange }> section title </h1>
        <div className={styles.sectionContainer} >

          <div className={styles.progressContainer}>
            <h1> {this.props.stage} </h1>
          </div>

          <div className={styles.questionContainer}>
            < SelectQuestion handleChange={ this.handleChange } question={this.props.section[0]} key={1} id={0} />
            < TextQuestion handleChange={ this.handleChange } question={this.props.section[1]} key={2} id={0} />
          </div>

        </div>

        <div className={styles.buttons}>
          { buttons }
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
