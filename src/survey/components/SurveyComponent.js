import React from 'react';

class F3Component extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  getOptions() {
    this.props.question.forEach((q)=>{
      console.log("")
    })
  }

  render() {
    console.log('SCOM: render props', this.props)
    return (
      <h2> This is the SurveyComponent</h2>
    )
  }
}

export default F3Component;
