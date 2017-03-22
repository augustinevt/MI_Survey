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
    //has a collection of all the valid and invalid inputs in state
    // state = { inputs: [ email: false, welcome-form-container: true ] }
    //if all are valid than
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
      <h1> Welcome to Walmart!</h1>
      <div className="welcome-container">
        <div className="welcome-form-container">

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="name"> name </label>
            <input className={styles.input} value={this.props.user.name} onChange={this.onChange} type="text" name="name" /> <br/>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="company"> company </label>
            <input className={styles.input} value={this.props.user.company} onChange={this.onChange} type="text" name="company" /> <br/>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email"> email </label>
            <input className={styles.input} value={this.props.user.email} onChange={this.onChange} type="text" name="email" /> <br/>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="phone"> phone </label>
            <input className={styles.input} value={this.props.user.phone} onChange={this.onChange} type="text" name="phone" />
          </div>


          <div className={ styles.buttons } >
            <div className={ styles.button }>
              <Link to="/survey"> Go to Survey </Link>
            </div>
          </div>


        </div>
        <div className="welcome-form-container">
          <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
//
// onChange(e) {
//   const newObj = {}
//   newObj[e.target.name] = e.target.value;
//
//   this.props.handleChange(newObj)
// }
//
// componentDidUpdate() {
//   //OR IN render
//   // run regex to see if there is content
//   // in case of email run some other regex
//   // have a regex store? That could be rad...
//   // if there is an error and internal state has "touched: true", apply classes and fire this.props.onError
//   // onError should be defined
//   // if no parsing error it renders as normal...
// }
//
// render() {
//   return (
//     <div>
//       <h2>This is the user form</h2>
//
//
//       <div className={styles.inputContainer}>
//         <label className={styles.label} htmlFor="name"> name </label>
//         <input className={styles.input} value={this.props.user.name} onChange={this.onChange} type="text" name="name" /> <br/>
//       </div>
//
//       <div className={styles.inputContainer}>
//         <label className={styles.label} htmlFor="company"> company </label>
//         <input className={styles.input} value={this.props.user.company} onChange={this.onChange} type="text" name="company" /> <br/>
//       </div>
//
//       <div className={styles.inputContainer}>
//         <label className={styles.label} htmlFor="email"> email </label>
//         <input className={styles.input} value={this.props.user.email} onChange={this.onChange} type="text" name="email" /> <br/>
//       </div>
//
//       <div className={styles.inputContainer}>
//         <label className={styles.label} htmlFor="phone"> phone </label>
//         <input className={styles.input} value={this.props.user.phone} onChange={this.onChange} type="text" name="phone" />
//       </div>
//     </div>
//   )
// }
