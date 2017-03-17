import React from 'react';
import SemanticBlock from './SemanticBlock';
import ChartBlock from './ChartBlock';

import styles from './styles.css';

import defaultReport from '../../../mockData/defaultReport';

const defaultProps = {

}

class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  getReports(reports) {
    const reportArray = [];
    reports.forEach((report) => {
      reportArray.push(<ChartBlock data={report.chart.data} />);
    });
    return reportArray;
  }

  render() {
    console.log('Report render', defaultReport)

    const report = (
        <ChartBlock data={defaultReport[0].chart.data} />
    )

    const reports =  this.getReports(defaultReport);

    const semanticBlock = (
        <SemanticBlock />
    )

    const semantics = [ semanticBlock, semanticBlock, semanticBlock ]

    return (
      <div className={styles.reportContainer}>
        <div className={styles.headline}>
            <h1> This is our advice for your business </h1>
        </div>
        <div className={styles.section} >
          { reports }
        </div>
        <div className={styles.section}>
          {semantics}
        </div>
      </div>
    )
  }
}

export default Report;
