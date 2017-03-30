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
      <div className={styles.main}>
        <h1 className={styles.header}> Thank you! Youre all done! </h1>
        <p> If you expressed interest in being in the VIP pilot group, you will hear back from us in the next week. Otherwise, expect to hear more about this exciting opportunity and what you need to do in the weeks ahead. </p>
        <p> If you have any questions, please <a href="mailto:jseiffert@monsooninc.com"> let us know</a>.</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SuccessContainer);
