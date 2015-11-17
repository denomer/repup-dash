import React from 'react';

export default class NegativeReview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      negtiveReview:[
        {title:'Poor Wifi', reviewCount:3},
        {title:'Rude Staff', reviewCount:4},
        {title:'Bad Food', reviewCount:13}
      ] 
    };
  }

  render(){
    var style = {
      width:'70%'
    };
    return(
        <div className="panel panel-default">
          <div className="panel-body panel-body-table">
            <div className="table-responsive">
              <h4>Negative Reviews</h4>
              <table className="table">
                <tbody>
                  <tr className="row">
                  {this.state.negtiveReview.map((reviews)=>{
                    return(
                      <td width="33%" className="col">
                        <div className="widget widget-danger widget-item-icon">                             
                            <div className="widget-title">{reviews.title}</div>
                            <div className="widget-subtitle">{reviews.reviewCount} Reviews</div>
                        </div>                                     
                      </td>            
                      );
                  })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
  }

}