import React from 'react';

import avatar from '../../avaterTemp.svg';
import styles from './css/userDisplay.css';

class UserDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const comma = this.props.name ? ',' : '';
    return (
      <div className={ styles.main } >
        <img className={ styles.avatar } src={ avatar } alt="avatar" />
        <div className={ styles.name } > Simon Lucas </div>
      </div>
    )
  }
}

UserDisplay.defaultProps = { name: 'foo' }

export default UserDisplay;

// <div className={ styles.name } > { this.props.name } kill </div>
// <div className={ styles.company } > { this.props.company } </div>
