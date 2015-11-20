import React from 'react';
import {range} from 'lodash';

import otablockData from './data';

export default class CatagoryStatsTab extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:otablockData.otaData
      }
  }

  render() {
    return (
      <div className="row">
        {this.state.data.map((otadata) => {
          return (
            <div className="col-md-4">
              <h4>{otadata.reviewPlatform}</h4>
                <div className="panel paneldefault">
                  <div className="panel-body">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <td>Hotel-Name</td>
                          <td>Reviews-Count</td>
                          <td>Reviews-Stats</td>
                        </tr>
                      </thead>
                      <tbody>
                        {otadata.data.map((content)=>{
                          return (
                          <tr>
                            <td>{content.hotelName}</td>
                            <td>{content.reviews}</td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar progress-bar-success"
                                      role="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                      style={{width: content.positiveReviews +'%'}} >
                                  {content.positiveReviews}%
                                </div>
                                <div className="progress-bar progress-bar-warning"
                                      role="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                      style={{width: content.neutralReviews +'%'}} >
                                  {content.neutralReviews}%
                                </div>
                                <div className="progress-bar progress-bar-danger"
                                      role="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                      style={{width: content.negativeReviews +'%'}} >
                                  {content.negativeReviews}%
                                </div>
                              </div>
                            </td>
                          </tr>
                        ) 
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>  
          )
        })}
      </div>
    );
  }
}