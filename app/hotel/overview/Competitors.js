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
                  return (
                    <tr className="row">
                      <td width="33%" >Hotel 1</td>
                      <td width="33%" >
                      <i className="glyphicon glyphicon-star"></i>
                      <i className="glyphicon glyphicon-star"></i>
                      <i className="glyphicon glyphicon-star"></i>
                      </td>
                      <td width="33%" >
                      <button className="btn btn-default btn-xs">view</button>
                      </td>
                    </tr>
                  );
                })}
               </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
