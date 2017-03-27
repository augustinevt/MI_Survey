import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './css/surveyContainer.css'
import UserDisplay from '../components/UserDisplay';

import { submitData } from '../operations/actions';
// import { defaultSelector } from '../operations/selectors';

// import { ChartJSDefault } from '../charts';
// import { ControlDefault } from '../charts';

const mapStateToProps = ( state ) => {
  console.log(state)
  return { user: state.user }
};

const mapDispatchToProps = ({
  submitData,
})

class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  getUserDisplay() {
    const path = this.props.location.pathname;

    if (path === '/') {
      return <UserDisplay />;
    }
    return <UserDisplay name={this.props.user.name} company={ this.props.user.company } />;
  }

  render() {
    console.log('SC: props data', this.props.location.pathname )
    const userDisplay = this.getUserDisplay();
    return (
      <div className="survey-container">
        <div className={styles.headerContainer}>
          { userDisplay }
          <h1 className={styles.header}> Monsoon Inc </h1>
        </div>
        <hr/>
        <div className={ styles.main }>
         { React.cloneElement(this.props.children, { key: 'childKey' }) }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
