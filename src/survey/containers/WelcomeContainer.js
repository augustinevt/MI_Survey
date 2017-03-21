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
    // state = { inputs: [ email: false, name: true ] }
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
        <h1> Welcome Welcom Welcome !</h1>
        <UserForm user={ this.props.user } handleChange={ this.handleChange }  />
        <Link to="/survey"> Go to Survey </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
