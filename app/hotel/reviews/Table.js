import React from 'react';
import {range} from 'lodash';

export default class TabaleData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const style1 = {
      width: '60%'
    };
    const style2 = {
      width: '30%'
    };
    const style3 = {
      width: '10%'
    };
    return (
      <div className="row">
        <div className="col-md-12">
        <h4>OTA Stats</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>OTA</th>
                <th>Score</th>
                <th>Total Reviews</th>
                <th>Review Stat</th>
              </tr>
            </thead>
            <tbody>
              {this.props.datatable.map((tdata) => {
              return(
                  <tr>
                  <td>{tdata.ota}</td>
                  <td>{tdata.score}</td>
                  <td>{tdata.totalReviews}</td>
                  <td>
                  <div className="progress">
                    <div className="progress-bar progress-bar-success" style={style1} >
                      <span>85%</span>
                    </div>
                    <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                      <span >10%</span>
                    </div>
                    <div className="progress-bar progress-bar-danger" style={style3} >
                      <span >5%</span>
                    </div>
                   </div> 
                  </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
