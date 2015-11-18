import React from 'react';

export default class NegativeReview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      negtiveReview:[
        {title:'Poor Wifi', reviewCount:3},
        {title:'Rude Staff', reviewCount:4},
        {title:'Bad Food', reviewCount:13},
        {title:'slow internet', reviewCount:5},
        {title:'dirty towel', reviewCount:2},
        {title:'tasteless food', reviewCount:12},
        {title:'dirty floor', reviewCount:7},
        {title:'no parking', reviewCount:3}
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
            
              <h4>Top Negative Reviews</h4>
              
                  {this.state.negtiveReview.map((reviews)=>{
                    return(
                            <div className="btn-group">
                            <a href="#" className="btn btn-danger btn-xs dropdown-toggle" data-toggle="dropdown">{reviews.title} <span className="badge"> {reviews.reviewCount}</span> <i className="caret"></i></a> 
                           <ul className="dropdown-menu">
                              <li><a href="#">View</a></li>
                              <li><a href="#">Report</a></li>
                            </ul>
                          </div>

                              
                                               );
                  })}
                
               
          </div>
        </div>
      );
  }

}