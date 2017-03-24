import React from 'react';
import { connect } from 'react-redux';
import styles from './css/successContainer.css';

const mapStateToProps = ( state ) => {
  return { user: state.user }
};

class SuccessContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('WelCon: props data', this.props)
    return(
      <div>
        <h1 className={styles.header}> Thanks! We will get back to you soon! </h1>
        <a className={styles.successAnchor} href="http://www.spacex.com/dragon">Checkout our amazing new direction!</a>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SuccessContainer);
