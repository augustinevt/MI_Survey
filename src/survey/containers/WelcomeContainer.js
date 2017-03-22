import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateUserThunk } from '../operations/actions';

import UserForm from '../components/UserForm';

const mapStateToProps = ( state ) => {
  return { user: state.user }
};

const mapDispatchToProps = ({
  updateUserThunk,
})

class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  getInputs() {
    // user keys and vals
    // pass kesy and vals into input component
  }

  isFormValid() {
    //has a collection of all the valid and invalid inputs in state
    // state = { inputs: [ email: false, welcome-form-container: true ] }
    //if all are valid than
  }

  handleChange(userUpdate) {
    console.log('handle Change', userUpdate)
    this.props.updateUserThunk(userUpdate)
  }

  render() {
    console.log('WelCon: props data', this.props)
    return(
      <div>
      <h1> Welcome to Walmart!</h1>
      <div className="welcome-container">
        <div className="welcome-form-container">
          <UserForm user={ this.props.user } handleChange={ this.handleChange }  />
        </div>
        <div className="welcome-form-container">
          <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
      <Link to="/survey"> Go to Survey </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
