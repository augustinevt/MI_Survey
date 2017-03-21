import React from 'react';
import { connect } from 'react-redux';

import { changeStageThunk, updateDataThunk } from '../operations/actions';
import { sectionSelector } from '../operations/selectors';

const mapStateToProps = ( state ) => {
  console.log(state)
  return { section: sectionSelector(state), stage: state.stage }
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
  }

  onSectionChange(value) {
    this.props.changeStageThunk(3)
    this.props.updateDataThunk({ title: "weeee"})
  }

  render() {
    console.log('SecCon: props data', this.props.section)
    return(
      <div>
        <h1 onClick={ this.onSectionChange }> This is the SectionContainer </h1>
        { this.props.stage }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
