import React from 'react';
import  styles from './css/progressBar.css';

class TextQuestion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  getProgressIcons() {

    const stageTwo = this.props.stage > 1 ? styles.active : styles.inActive;
    const stageThree = this.props.stage > 2 ? styles.active : styles.inActive;

    console.log("PROGRESS BAR", stageThree, styles.inActive)


    return [
      <div className={styles.active} />,
      <div className={stageTwo} />,
      <div className={stageThree} />,
     ]
  }

  render() {
    const progressIcons = this.getProgressIcons();
    return (
      <div className={ styles.main }>
        <div className={styles.line}> </div>
        { progressIcons }
      </div>
    )
  }
}

export default TextQuestion;
