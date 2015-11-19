import React from 'react';
import {createElement} from 'react';
import dropdown from 'app/util/hoc/dropdown';

export default class NegativeReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negtiveReview: [
        {title: 'Room Amenities and Experience', reviewCount: 3,changed:'5'},
        {title: 'Washrooms', reviewCount: 4,changed:'-5'},
        {title: 'Restaurant', reviewCount: 13,changed:'2'},
        {title: 'Internet', reviewCount: 5,changed:'-7'}
      ]
    };
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h4>Top Negative Reviews</h4>
          {this.state.negtiveReview.map((reviews)=>{
            return createElement(dropdown((props) => (
              <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-9 text-danger">{reviews.title}</div>
                      <div className="col-md-3">{reviews.reviewCount}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className={props.dropdownClass('pull-right')}>
                          
                            <i onClick={props.toggleDropdown}  className="caret"  data-control></i>
                          
                          <ul className="dropdown-menu">
                            <li><a href="#">View</a></li>
                            <li><a href="#">Report</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )));
          })}
        </div>
      </div>
    );
  }
}
