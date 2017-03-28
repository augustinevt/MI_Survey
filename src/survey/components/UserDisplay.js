import React from 'react';

import styles from './css/userDisplay.css';

class UserDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comma = this.props.name ? ',' : '';
    return (
      <div className={ styles.main } >
        <div className={ styles.name } > { this.props.name }</div>
      </div>
    )
  }
}

export default UserDisplay;

// <div className={ styles.company } > { this.props.company } </div>
