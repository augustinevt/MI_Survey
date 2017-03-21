import React from 'react';
import Button from './Button.js';

class Select extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onClick = this.onClick.bind(this)
  }

  getOptions() {
    const returnArray = [];
    this.props.question.response.forEach((q, i)=>{
      console.log("SELCOM: forEach", q, i);
      returnArray.push(
        <Button
          key={i} id={i}
          label={q.label}
          value={q.value}
          onClick={this.onClick}
        />
      )
    })
    return returnArray;
  }

  onClick(newRes, id) {
    const newQ =  Object.assign({}, this.props.question);
    // console.log("SCOM: new Q : before", newQ);


    // console.log("SCOM: newQ.response[0]",id, newQ.response[id])
    // console.log("SCOM: newRes",id, newQ.response[id])

    newQ.response[id] = newRes;

    console.log("SCOM: id", this.props.question.id)

    this.props.handleChange(newQ, this.props.question.id)

    // console.log("SCOM: new Q : after", newQ);
  }

  render() {
    console.log('SCOM: render props', this.props);

    const buttons = this.getOptions();

    return (

      <div>
        <h1>{this.props.question.title}</h1>
        {buttons}
      </div>
    )
  }
}

export default Select;
