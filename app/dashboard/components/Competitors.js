import React from 'react';
import {range} from '../../util';

export default class Competitors extends React.Component{
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
                {range(1,5).map(() => {
                  return (
                    <tr className="row">
                      <td width="33%" className="col">Hotel 1</td>
                      <td width="33%" className="col">
                      <i className="glyphicon glyphicon-star"></i>
                      <i className="glyphicon glyphicon-star"></i>
                      <i className="glyphicon glyphicon-star"></i>
                      </td>
                      <td width="33%" className="col">
                      <button type="button" className="btn btn-default">View</button>
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