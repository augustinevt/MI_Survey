import React from 'react';
import { connect } from 'react-redux';

import { getData, doSomething } from '../operations/actions';
import { defaultSelector } from '../operations/selectors';

// import { ChartJSDefault } from '../charts';
// import { ControlDefault } from '../charts';

const mapStateToProps = ( state ) => {
  return { data: state.data, actionData: state.actionData, selectorData: defaultSelector(state)}
};

const mapDispatchToProps = ({
  getData,
  doSomething,
})

class F3Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.changeF3Filter(value)
  }

  render() {
    console.log('Hello from HC:render! this is getHistoricalOrders!', this.props.historical)
    return(
      <div>
        <h1> This is F3Container </h1>
        { this.props.children }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(F3Container);
