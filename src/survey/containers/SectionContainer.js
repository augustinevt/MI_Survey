import React from 'react';
import { connect } from 'react-redux';

import { changeStageThunk, updateDataThunk, submitData } from '../operations/actions';
import { sectionSelector } from '../operations/selectors';

import SelectQuestion from '../components/SelectQuestion'
import TextQuestion from '../components/TextQuestion';
import NumberQuestion from '../components/NumberQuestion';
import ProgressBar from '../components/ProgressBar';

import styles from './css/sectionContainer.css';

const mapStateToProps = ( state ) => {
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
    this.state = {
      errors: {}
    };

    this.onSectionChange = this.onSectionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onNext = this.onNext.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSectionChange(val) {
    this.props.changeStageThunk( this.props.stage + val)
  }

  onNext() {
    if ( this.validate(this.props.section.questions) && ((this.props.stage + 1 ) <= 3) ) {
      this.onSectionChange(1)
    }
  }

  onSubmit() {
    if ( this.validate(this.props.section.questions)) {
      this.props.submitData().then(() => {
        this.props.router.push('/success')
      });
    }
  }

  onBack() {
    if ((this.props.stage -1 ) < 1) {
      this.props.router.push('/')
    } else {
      this.onSectionChange(-1)
    }
  }

  getQuestions(questions) {
    return questions.map((question, i) => {
      let jsx;

      if ( question.type === 'text') {
        jsx = < TextQuestion handleChange={ this.handleChange } errorMessage={ this.state.errors[question.id] } question={ question } key={i} />
      } else if (question.type === 'singleSelect') {
        jsx = < SelectQuestion handleChange={ this.handleChange } errorMessage={ this.state.errors[question.id] } singleSelect question={ question } key={i} />
      } else if (question.type === 'number') {
        jsx = < NumberQuestion handleChange={ this.handleChange } errorMessage={ this.state.errors[question.id] } question={ question } key={i} />
      } else {
        jsx = < SelectQuestion handleChange={ this.handleChange } errorMessage={ this.state.errors[question.id] } question={ question } key={i} />
      }

      return jsx;
    });
  }

  handleChange(newQ, qId) {
    this.props.updateDataThunk(newQ)
  }

  validate(questions) {
    const errors = {};
    let flag = true;

    questions.forEach((q) => {
      if (q.type === 'text') {
        // I know this is a bit over the top...
        if (!this.checkText(q)) {
          errors[q.id] = true;
          flag = false;
        }
      // because the only other type is select;
    } else if (q.type === 'number') {
      return;
    } else if ( !this.checkSelect(q) ) {
        errors[q.id] = true;
        flag = false;
      }
    })
    this.setState({ errors });

    return flag;
  }

  checkText(question) {
    return question.response ? true : false;
  }

  checkSelect(question){
    let flag = false;

    question.response.forEach((res) => {
      if (res.value === true) {
        flag = true;
      }
    })

    return flag;
  }

  render() {
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
    const questions = this.getQuestions(this.props.section.questions);

    return(
      <div className={ styles.main }>
        <h1 className={ styles.header } onClick={ this.onSectionChange }> { this.props.section.title } </h1>
        <div className={styles.sectionContainer} >

          <div className={styles.progressContainer}>
            <ProgressBar stage={ this.props.stage } />
          </div>

          <div className={styles.questionContainer}>

            { questions }

            <div className={styles.buttons}>
              { buttons }
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
