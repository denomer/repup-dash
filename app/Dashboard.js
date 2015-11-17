import React from 'react';
import Ota from './Ota';
import Competitors from './Competitors';
import ReviewHighlights from './ReviewHighlights';
import NegativeReview from './NegativeReview';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <NegativeReview name="NegativeReview"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ReviewHighlights name="ReviewHighlights"/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <Ota name="Ota"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Competitors name="Competitors"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}