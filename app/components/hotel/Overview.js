import React from 'react';
import Ota from './overview/Ota';
import Competitors from './overview/Competitors';
import ReviewHighlights from './overview/ReviewHighlights';
import NegativeReview from './overview/NegativeReview';
import CommonModal from './common/CommonModal'

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
              <NegativeReview />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ReviewHighlights />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <Ota />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Competitors />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
