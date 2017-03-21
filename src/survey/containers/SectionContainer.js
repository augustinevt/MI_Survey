import React from 'react';
import { connect } from 'react-redux';

import { changeStageThunk, updateDataThunk } from '../operations/actions';
import { sectionSelector } from '../operations/selectors';

import SelectQuestion from '../components/SelectQuestion'
import TextQuestion from '../components/TextQuestion'

const mapStateToProps = ( state ) => {
  console.log(state)
  return { section: sectionSelector(state), stage: state.stage, questions: state.questions }
};

const mapDispatchToProps = ({
  changeStageThunk,
  updateDataThunk,
})

class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSectionChange = this.onSectionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSectionChange(value) {
    this.props.changeStageThunk(3)
  }

  handleChange(newQ, qId) {
    console.log("CHANGE HANDLED", newQ, qId);
    this.props.updateDataThunk(newQ)
  }

  render() {
    console.log('SecCon: props data', this.props.questions)
    return(
      <div>
        <h1 onClick={ this.onSectionChange }> This is the SectionContainer </h1>
        { this.props.stage }
        < SelectQuestion handleChange={ this.handleChange } question={this.props.questions[0]} key={1} id={0} />
        < TextQuestion handleChange={ this.handleChange } question={this.props.questions[1]} key={2} id={0} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
