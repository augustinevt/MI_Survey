import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './css/welcomeContainer.css';

import api from '../../helpers/api';

import { updateUserThunk, getUserThunk } from '../operations/actions';

import UserForm from '../components/UserForm';

const mapStateToProps = ( state ) => {
  return { user: state.user }
};

const mapDispatchToProps = ({
  updateUserThunk,
  getUserThunk,
})

class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      email: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.getEmail = this.getEmail.bind(this);
  }

  getInputs() {
    // user keys and vals
    // pass kesy and vals into input component
  }

  isFormValid(e) {
    const user = this.props.user;
    const { name, email, company } = this.props.user;

    const newErrors = {};

    Object.keys(this.props.user).forEach((field) => {

      const val =  user[field];

      console.log("VAL", user, field, user[field])


      if(!val) {
        console.log('VAL', newErrors)
        newErrors[field] = 'Required';
      }

    })

    this.setState({ errors: newErrors })

    if (name && email && company) {
      this.props.router.push('/survey')
    }
  }

  getEmail() {
    // this.setState({ errors: { knownUser: 'We could not find you...'}})
    console.log("getUser", this.searchEmail.value)
    this.props.getUserThunk(this.searchEmail.value).catch((err) => {
      this.setState({ errors: { knownUser: 'We could not find you...'}})
    });
    this.setState({email: false})
  }

  onChange(e) {
    const newObj = {}
    newObj[e.target.name] = e.target.value;

    this.handleChange(newObj)
  }

  handleChange(userUpdate) {

    this.props.updateUserThunk(userUpdate)
  }

  getFields(user) {

    const email = this.state.email;
    let jsx;

    if ( email ) {
      return (
        <div className={styles.fromContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={'email'}> email </label>
            <input ref={ (input) => this.searchEmail = input } className={styles.input} type="text" name="email" />
          </div>
          <div className={ styles.buttons } >
            <div onClick={ this.getEmail } className={ styles.button }>
              Check Email
            </div>
          </div>
        </div>
      )
    } else {
      jsx = Object.keys(user).map((field) => {
        return (
          <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={field} key={field + 'label'}> { field }  </label>
          <input className={styles.input} value={user[field]} onChange={this.onChange} type="text" name={field} key={field} />
          <span className={styles.errors} key={field + 'errors'}> { this.state.errors[field] } </span>
          </div>
        )
      })
      return (
        <div className={styles.fromContainer}>
          { this.state.errors.knownUser }
          { jsx }
          <div className={ styles.buttons } >
            <div onClick={ this.isFormValid } className={ styles.button }>
              Start Survey
            </div>
          </div>
        </div>
      )

    }

  }

  render() {
    console.log('VAL: props data', this.state);
    const form = this.getFields(this.props.user);
    return(
      <div>
      <h1 className={ styles.header }> Welcome to Walmart!</h1>
      <div className={ styles.welcomeContainer }>
        <div className={ styles.formContainer }>

          { form }

        </div>
        <div className={styles.contentContainer}>
          <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
