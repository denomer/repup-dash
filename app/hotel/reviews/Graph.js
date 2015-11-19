import React from 'react';
import {Line, Pie} from 'react-chartjs';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
  let optionForLine = {
    bezierCurve: false,
    tooltipTemplate: "<%= value %>",
    showTooltips: true,
    onAnimationComplete: function()
    {    
        this.showTooltip(this.datasets[0].points, true);          
    },
    tooltipEvents: []
  }

  // let optionForPie = {
  //   tooltipTemplate: "<%= label %>:<%= value %>",

  //   onAnimationComplete: function()
  //   {
  //       this.showTooltip(this.segments, true);
  //   },

  //   tooltipEvents: [],

  //   showTooltips: true
  // }
    return (
      <div className="row review-graph">
        <div className="col-md-8">
          <Line data={this.props.lineData} options={optionForLine} width="500" height="200"/>
        </div>
        <div className="col-md-4 review-piegraph">
          <Pie data={this.props.pieData}  width="250" height="100"/>
        </div>
      </div>
    );
  }
}