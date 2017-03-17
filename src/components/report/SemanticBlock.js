import React from 'react';
import styles from './styles.css'

const defaultProps = {
  text: 'hello, default text here'
}

class SemanticBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div className={styles.semanticBlock}>
      { this.props.text }
    </div>
    );
  }
}

SemanticBlock.defaultProps = defaultProps;

export default SemanticBlock;
