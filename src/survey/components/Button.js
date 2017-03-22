import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const label = this.props.label;
    const value = this.props.value ? false : true;
    // const value = true;


    // console.log( { label, value }, this.props.id );
    // console.log( "val", value);


    this.props.onClick({ label, value }, this.props.id)
  }

  render() {
    console.log('Button: render props', this.props.value);
    const value = this.props.value ? 'True' : 'False';
    return (
      <h2 className="bux" onClick={this.onClick}> This is Button: {this.props.label} {value} </h2>
    )
  }
}

export default Button;
