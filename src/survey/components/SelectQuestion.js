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
    //btw, the 'id' is the index value of the modified response.
    //It is sent up from the button. I wonder if it's safe though...
    const oldRes = this.props.question.response[id];


    if (this.props.singleSelect) {
      // purpose: so that users cannot unselect a singleSelect button
      // by clicking again.
      if (oldRes.value === true) {
        return;
      }

      newQ.response.forEach((res) => {
        res.value = false;
      })
    }

    newRes.value = newRes.value ? false : true;
    newQ.response[id] = newRes;
    this.props.handleChange(newQ, this.props.question.id)
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
