import React from 'react';
import styles from './css/userForm.css';

class UserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      submitable: false,
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const newObj = {}
    newObj[e.target.name] = e.target.value;

    this.props.handleChange(newObj)
  }

  componentDidUpdate() {
    //OR IN render
    // run regex to see if there is content
    // in case of email run some other regex
    // have a regex store? That could be rad...
    // if there is an error and internal state has "touched: true", apply classes and fire this.props.onError
    // onError should be defined
    // if no parsing error it renders as normal...
  }

  render() {
    return (
      <div>
        <h2>This is the user form</h2>
        

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
      </div>
    )
  }
}

export default UserForm;
