import React from 'react';
import {range} from 'lodash';

export default class Competitors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body panel-body-table">
          <div className="table-responsive">
            <h4>Top Rated Competitors</h4>
            <table className="table">
              <tbody>
                {range(1, 5).map(() => {
                  return [
                    <tr className="row">
                      <td width="" >Hotel 1</td>
                    </tr>,
                    <tr>
                      <td width="" >
                        <i className="glyphicon glyphicon-star"></i>
                        <i className="glyphicon glyphicon-star"></i>
                        <i className="glyphicon glyphicon-star"></i>
                      </td>
                      <td>
                        #27
                      </td>
                      <td width="" >
                        <button className="btn btn-default btn-xs">view</button>
                      </td>
                    </tr>
                  ];
                }).reduce((allTds, tds) => { return allTds.concat(tds); }, [])}
               </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
