import React from 'react';
import styles from './css/button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const label = this.props.label;
    const value = this.props.value ? false : true;
    // const value = true;


    // console.log( { label, value }, this.props.id );
    // console.log( "val", value);
    this.props.onClick({ label, value }, this.props.id)
  }

  render() {
    console.log('Button: render props', this.props.value);
    const value = this.props.value ? 'True' : 'False';
    return (
      <div className={styles.button} onClick={this.onClick}> { this.props.label } ({value})</div>
    )
  }
}

export default Button;
