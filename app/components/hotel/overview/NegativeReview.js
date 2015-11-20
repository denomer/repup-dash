import React from 'react';
import {createElement} from 'react';
import dropdown from 'app/util/hoc/dropdown';

export default class NegativeReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negtiveReview: [
        {title: 'Washrooms', reviewCount: 4, changed: '-5'},
        {title: 'Restaurant', reviewCount: 13, changed: '2'},
        {title: 'Internet', reviewCount: 5, changed: '-7'}
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
                      <div className="col-md-9">
                      <span className={arrowStyleNegativeReviews(reviews.changed)}></span>{reviews.changed}%
                      </div>
                      <div className="col-md-3">
                        <div className={props.dropdownClass('pull-right')}>
                          <button onClick={props.toggleDropdown} className="btn btn-default btn-xs" data-control>
                            <i className="caret"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li><a href="#">View Reviews</a></li>
                            <li><a href="#">Generate Ticket</a></li>
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

function arrowStyleNegativeReviews(value) {
  if (value>0) {
    return 'glyphicon glyphicon-arrow-up text-danger';
  } else {
    return 'glyphicon glyphicon-arrow-down text-success';
  }
}
