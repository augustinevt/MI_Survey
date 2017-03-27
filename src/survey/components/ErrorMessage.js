import React from 'react';
import styles from './css/errorMessage.css';

import icon from '../../exclamation.svg';


class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let jsx =  <div> </div>;

    if (this.props.errorMessage) {
      jsx = (
        <div className={ styles.errorContainer } >
          <img className={ styles.icon } src={ icon } alt="exlamation icon" />
          { this.props.errorMessage }
        </div>
      )
    }

    return (
      jsx
    )

  }
}

export default ErrorMessage;
