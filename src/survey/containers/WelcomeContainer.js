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
      loading: false,
      email: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.onEmailKeyPress = this.onEmailKeyPress.bind(this);
    this.onFormKeyPress = this.onFormKeyPress.bind(this);
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
      if (!val) {
        newErrors[field] = true;
      }
    });

    this.setState({ errors: newErrors })

    if (name && email && company) {
      this.props.router.push('/survey')
    }
  }

  getEmail() {
    this.props.getUserThunk(this.searchEmail.value).then(() => {
      this.setState({email: false});
    }).catch((err) => {
      this.setState({email: false})
    })
  }

  onChange(e) {
    const newObj = {}
    newObj[e.target.name] = e.target.value;

    this.handleChange(newObj)
  }

  handleChange(userUpdate = {}) {
    this.props.updateUserThunk(userUpdate)
  }

  onEmailKeyPress(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      this.getEmail();
    }
  }

  onFormKeyPress(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      this.isFormValid();
    }
  }

  getFields(user) {
    const email = this.state.email;
    const inputs = Object.keys(user).map((field) => {
      if (field === "email") {
        return;
      } else {
        return (
          <div className={styles.inputContainer}>
          <input
          className={styles.input}
          value={user[field]}
          placeholder={`${field}`}
          onChange={this.onChange}
          onKeyPress={ this.onFormKeyPress }
          type="text"
          name={field}
          key={field}
          />
          <ErrorMessage errorMessage={ this.state.errors[field] } key={`${field}-error`} />
          </div>
        )
      }
    });

    const form = !email ? inputs : <div></div> ;
    const button = email ?  <div onClick={ this.getEmail } className={ styles.button }> Check Email </div> : <div onClick={ this.isFormValid } className={ styles.button }> Start Survey </div>;

    return (
      <div className={styles.fromContainer}>
        <div className={styles.inputContainer}>
          <input
             ref={ (input) => this.searchEmail = input }
             onChange={this.onChange}
             onKeyPress={ this.onEmailKeyPress }
             placeholder="email"
             className={styles.input}
             type="text"
             name="email"
          />
          <ErrorMessage errorMessage={ this.state.errors.email } key={`email-error`} />
        </div>
        { form }
        <div className={ styles.buttons } >
          { button }
        </div>
        <div className={styles.errors}>
          { this.state.errors.knownUser }
        </div>
      </div>
    )
  }

  render() {
    const form = this.getFields(this.props.user);
    return(
      <div>
      <h1 className={ styles.header }> Monsoon is now a Walmart Channel Partner! </h1>
      <div className={ styles.welcomeContainer }>
        <div className={styles.contentContainer}>
          <div>
            <p> Because of this exciting new partnership, and our amazing engineering team, we are ready to start bringing customers live on the Walmart marketplace. </p>
            <p> If you are interested in selling on Walmart, please let us know why you anticipate success on that channel and in what timeframe you will be ready. </p>
            <p> We are also looking for five customers who are ready to integrate within the next two weeks to be our VIP pilot group. Please indicate that you would like to participate in the survey if you’re interested. </p>
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
