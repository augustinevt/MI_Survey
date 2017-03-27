import React from 'react';

import styles from './css/userDisplay.css';

class UserDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.main } >
        <div className={ styles.name } > { this.props.name } </div>
        <div className={ styles.company } > { this.props.company } </div>
      </div>
    )
  }
}

export default UserDisplay;
