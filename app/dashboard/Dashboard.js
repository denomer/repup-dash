import React from 'react';
import Ota from './components/Ota';
import Competitors from './components/Competitors';
import ReviewHighlights from './components/ReviewHighlights';
import NegativeReview from './components/NegativeReview';

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