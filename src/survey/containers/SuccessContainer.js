import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = ( state ) => {
  return { user: state.user }
};

class SuccessContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('WelCon: props data', this.props)
    return(
      <div>
        <h1> Thanks! We will get back to you soon! </h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SuccessContainer);
