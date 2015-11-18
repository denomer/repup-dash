import React from 'react';
import {range} from '../../util';

export default class Ota extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hotelRatings: [
        {ota: 'MakeMyTrip', score: 3},
        {ota: 'Expedia', score: 4},
        {ota: 'Goibibo', score: 2},
        {ota: 'Booking', score: 5},
        {ota: 'Tripadvisor', score: 5},
        {ota: 'Agoda', score: 5}
      ]
    };
  }

  render() {
    return(
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  {this.state.hotelRatings.map((rating) => {
                    return (
                      <tr className="row">
                        <td width="50%" className="col">{rating.ota}</td>
                        <td width="50%" className="col">
                          {range(0, rating.score).map(() => {
                            return <i className="glyphicon glyphicon-star"></i>;
                          })}
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