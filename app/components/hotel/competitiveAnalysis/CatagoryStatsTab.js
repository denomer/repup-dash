import React from 'react';
import {range} from 'lodash';

import CatagoryScoresData from './CatagoryScoresData';

export default class CatagoryStatsTab extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:CatagoryScoresData.catagoryScoresData
      }
  }

  render(){
    return(
      <div className="row">
      <div className="col-md-12">
      <div className="table">
        <table className="table">
          {this.state.data.map((content)=>{
            return(
              <tbody>
                <tr>
                  <td></td>
                  <td>Rooms &..</td>
                  <td>Washrooms</td>
                  <td>Hotel</td>
                  <td>Hotel Facilities</td>
                  <td>Restaurant</td>
                  <td>Front Desk</td>
                  <td>Internet</td>
                  <td>Others</td>
                </tr>
                {range(1, 5).map(() => {
                  return (
                    <tr>
                      <td>{content.hotelName}</td>
                      {content.catagories.map((cData)=>{
                        return(
                          <div>
                          {range(1, 9).map(() => {
                            return (
                              <td>
                                <span className="small">{cData.CatagoryName}</span>
                                <div className="progress">
                                  <div className="progress-bar progress-bar-success"
                                        role="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                        style={{width: cData.positiveReviews +'%'}} >
                                    {cData.positiveReviews}%
                                  </div>
                                  <div className="progress-bar progress-bar-warning"
                                        role="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                        style={{width: cData.neutralReviews +'%'}} >
                                    {cData.neutralReviews}%
                                  </div>
                                  <div className="progress-bar progress-bar-danger"
                                        role="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                        style={{width: cData.negativeReviews +'%'}} >
                                    {cData.negativeReviews}%
                                  </div>
                                </div>
                                <span className="small">Score {cData.score} Reviews {cData.reviews}</span>
                              </td>
                              );
                          })}
                          </div>
                          );
                      })}
                  </tr>
                    );
                })}
              </tbody>
            );
          })}
        </table>
      </div>
      </div>
      </div>
      );
  }
}