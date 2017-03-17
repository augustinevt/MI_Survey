import React from 'react';
import Chart from 'chart.js'

const defaultProps = {
  data: [{
    x: 9999999999,
    y: 4
  }, {
    x: 8888888888,
    y: 2
  }, {
    x: 7777777777,
    y: 1
  }, {
    x: 6666666666,
    y: 0
  }],
}

class ChartJSDefault extends React.Component {

  componentDidMount() {
      let ctx = document.getElementById("myChart");
      console.log(this.props.data)
      const propsData = this.props.data;
      const data = [{
        x: 9999999999,
        y: 4
      }, {
        x: 8888888888,
        y: 2
      }, {
        x: 7777777777,
        y: 1
      }, {
        x: 6666666666,
        y: 0
      }];
      console.log('data', data)
      let myChart = new Chart(ctx, {
        type: 'line',
  			data: {
  				datasets: [{
  					label: "Dataset with string point data",
  					backgroundColor: '220 300 200',
  					borderColor: "blue",
  					fill: false,
  					data: propsData,
  				}]
  			},
  			options: {
  				responsive: true,
                  title:{
                      display:true,
                      text:"Chart.js Time Point Data"
                  },
  				scales: {
  					xAxes: [{
  						type: "time",
  						display: true,
  						scaleLabel: {
  							display: true,
  							labelString: 'Date'
  						}
  					}],
  					yAxes: [{
  						display: true,
              ticks: {min: 0, max:20},
  						scaleLabel: {
  							display: true,
  							labelString: 'value'
  						}
  					}]
  				}
        }
			});
  }

  componentDidUpdate() {
    let ctx = document.getElementById("myChart");
    console.log(this.props.data)
    const propsData = this.props.data;
    const data = [{
      x: 9999999999,
      y: 4
    }, {
      x: 8888888888,
      y: 2
    }, {
      x: 7777777777,
      y: 1
    }, {
      x: 6666666666,
      y: 0
    }];
    console.log('data', data)
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: "Dataset with string point data",
          backgroundColor: '220 300 200',
          borderColor: "blue",
          fill: false,
          data: propsData,
        }]
      },
      options: {
        responsive: true,
                title:{
                    display:true,
                    text:"Chart.js Time Point Data"
                },
        scales: {
          xAxes: [{
            type: "time",
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {min: 0, max:20},
            scaleLabel: {
              display: true,
              labelString: 'value'
            }
          }]
        }
      }
    });
  }

  render(){
    return (
      <div>
        <h2>Hello, this is the ChartJSDefault Component</h2>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }

}

ChartJSDefault.defaultProps = defaultProps;

export default ChartJSDefault;

// var config = {
//   type: 'line',
//   data: {
//     datasets: [{
//       label: "Dataset with string point data",
//       backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
//       borderColor: window.chartColors.red,
//       fill: false,
//       data: [{
//         x: newDateString(0),
//         y: randomScalingFactor()
//       }, {
//         x: newDateString(2),
//         y: randomScalingFactor()
//       }, {
//         x: newDateString(4),
//         y: randomScalingFactor()
//       }, {
//         x: newDateString(5),
//         y: randomScalingFactor()
//       }],
//     }, {
//       label: "Dataset with date object point data",
//       backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
//       borderColor: window.chartColors.blue,
//       fill: false,
//       data: [{
//         x: newDate(0),
//         y: randomScalingFactor()
//       }, {
//         x: newDate(2),
//         y: randomScalingFactor()
//       }, {
//         x: newDate(4),
//         y: randomScalingFactor()
//       }, {
//         x: newDate(5),
//         y: randomScalingFactor()
//       }]
//     }]
//   },
//   options: {
//     responsive: true,
//             title:{
//                 display:true,
//                 text:"Chart.js Time Point Data"
//             },
//     scales: {
//       xAxes: [{
//         type: "time",
//         display: true,
//         scaleLabel: {
//           display: true,
//           labelString: 'Date'
//         }
//       }],
//       yAxes: [{
//         display: true,
//         scaleLabel: {
//           display: true,
//           labelString: 'value'
//         }
//       }]
//     }
//   }
// };
