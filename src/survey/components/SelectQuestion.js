import React from 'react';
import Button from './Button.js';
import styles from './css/selectQuestion.css';

class Select extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onClick = this.onClick.bind(this)
  }

  getOptions() {
    const returnArray = [];
    this.props.question.response.forEach((q, i)=>{
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

    // console.log("SCOM: id", this.props.question.id)

    this.props.handleChange(newQ, this.props.question.id)

    // console.log("SCOM: new Q : after", newQ);
  }

  render() {
    const buttons = this.getOptions();

    return (

      <div className={ styles.main }>
        <h2 className={ styles.header }>{this.props.question.title}</h2>
        <div className={ styles.buttons }> {buttons} </div>
      </div>
    )
  }
}

export default Select;
