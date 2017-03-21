import React from 'react';

class TextQuestion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {

    console.log('Changed', e.target.value)

    const newQ = Object.assign({}, this.props.question);

    console.log("text: newQ : before", newQ)

    newQ.response = e.target.value;

    console.log("text: newQ : after", newQ)

    this.props.handleChange(newQ)
  }

  render() {
    console.log('TextQuestion: render props', this.props);
    return (
      <div>
        <h2> {this.props.question.title }</h2>
        <textArea value={this.props.question.response} onChange={ this.onChange}  />
      </div>
    )
  }
}

export default TextQuestion;
