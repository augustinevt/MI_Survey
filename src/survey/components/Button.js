import React from 'react';
import styles from './css/button.css';
import classnames from 'classnames';

class Button extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {

    const label = this.props.label;
    const value = this.props.value;
    // const value = this.props.value ? false : true;


    this.props.onClick({ label, value }, this.props.id)
  }

  render() {
    console.log('Button: render props', this.props.value);
    const value = this.props.value;
    const classo = classnames('foo', styles.button, { [styles.active]: value })

    return (
      <div className={classo} value={ value } onClick={this.onClick}>
        <div className={styles.buttonLabel}>
          { this.props.label }
        </div>
      </div>
    )
  }
}

export default Button;
