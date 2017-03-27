import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './css/welcomeContainer.css';

import { updateUserThunk, getUserThunk } from '../operations/actions';

import ErrorMessage from '../components/ErrorMessage';

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
            <ErrorMessage errorMessage={ this.state.errors[field] } key={`${field}-error`} />
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
        <div className={styles.contentContainer}>
          <div>
          Because of this exciting new partnership, and our amazing engineering team, we are ready to start bringing customers live on the Walmart marketplace
If you are interested in selling on Walmart, please let us know why you anticipate success on that channel and in what timeframe you will be ready.
We are also looking for five customers who are ready to integrate within the next two weeks to be our VIP pilot group. Please indicate that you would like to participate in the survey if you’re interested.

          </div>
        </div>
        <div className={ styles.formContainer }>

          { form }

        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
