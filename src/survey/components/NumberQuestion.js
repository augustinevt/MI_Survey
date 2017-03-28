import React from 'react';
import  styles from './css/numberQuestion.css';
import ErrorMessage from './ErrorMessage';

class NumberQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const newQ = Object.assign({}, this.props.question);

    newQ.response = e.target.value;
    this.props.handleChange(newQ);
  }

  render() {
    return (
      <div className={ styles.main }>
        <ErrorMessage errorMessage={this.props.errorMessage} />
        <h2 className={styles.header}> {this.props.question.title }</h2>
        <div className={styles.inputContainer}>
          <input type="number"
            className={ styles.input }
            value={this.props.question.response}
            onChange={ this.onChange}
          />
        </div>
      </div>
    )
  }
}

export default NumberQuestion;
