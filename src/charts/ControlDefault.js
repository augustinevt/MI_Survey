import React from 'react';

class ControlDefault extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    const value = parseInt(this.input.value, 10);
    console.log(value)
    this.props.onChange(value);
  }

  render() {
    return (
      <div>
        Hello, Im the ControlDefault
        <input ref={ input => this.input = input } value="30" placeholder="I am a control thing" />
        <button onClick={ this.onChange }> Im a cool button </button>
        <select>
          <option> foo </option>
        </select>

      </div>
    );
  }
}

export default ControlDefault;
