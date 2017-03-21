import React from 'react';

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
    console.log('onChange', newObj )
    this.props.handleChange(newObj)
  }

  render() {
    return (
      <div>
        <h2>This is the user form</h2>
        <label htmlFor="name"> name </label>
        <input value={this.props.user.name} onChange={this.onChange} type="text" name="name" /> <br/>
        <label htmlFor="company"> company </label>
        <input value={this.props.user.company} onChange={this.onChange} type="text" name="company" /> <br/>
        <label htmlFor="email"> email </label>
        <input value={this.props.user.email} onChange={this.onChange} type="text" name="email" /> <br/>
        <label htmlFor="phone"> phone </label>
        <input value={this.props.user.phone} onChange={this.onChange} type="text" name="phone" />
      </div>
    )
  }
}

export default UserForm;
