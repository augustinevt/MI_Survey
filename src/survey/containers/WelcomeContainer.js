import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './css/welcomeContainer.css';

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
    this.onChange = this.onChange.bind(this);
  }

  getInputs() {
    // user keys and vals
    // pass kesy and vals into input component
  }

  isFormValid() {
    //more to come? use redux form?
  }

  onChange(e) {
    const newObj = {}
    newObj[e.target.name] = e.target.value;

    this.handleChange(newObj)
  }

  handleChange(userUpdate) {
    console.log('handle Change', userUpdate)
    this.props.updateUserThunk(userUpdate)
  }

  render() {
    console.log('WelCon: props data', this.props)
    return(
      <div>
      <h1 className={ styles.header }> Welcome to Walmart!</h1>
      <div className={ styles.welcomeContainer }>
        <div className={ styles.formContainer }>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="name"> Name </label>
            <input className={styles.input} value={this.props.user.name} onChange={this.onChange} type="text" name="name" /> <br/>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="company"> Company </label>
            <input className={styles.input} value={this.props.user.company} onChange={this.onChange} type="text" name="company" /> <br/>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email"> Email </label>
            <input className={styles.input} value={this.props.user.email} onChange={this.onChange} type="text" name="email" /> <br/>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="phone"> Phone </label>
            <input className={styles.input} value={this.props.user.phone} onChange={this.onChange} type="text" name="phone" />
          </div>

          <div className={ styles.buttons } >
            <div className={ styles.button }>
              <Link to="/survey"> Start Survey </Link>
            </div>
          </div>


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
