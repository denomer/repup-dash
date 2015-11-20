import React from 'react';

import {scoreStyle, arrowStyle} from 'app/util/helpers';
import {
  calculateBrandRepScore,
  calculateSocialMediaShares,
  calculateReviewsData,
  calculateBestProperty,
  calculateWorstProperty
} from './calculations';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <BrandScore {...this.props.account} />
            </div>
            <div className="col-md-3">
              <SocialMedia {...this.props.account} />
            </div>
            <div className="col-md-3">
              <PositiveReviews {...this.props.account} />
            </div>
            <div className="col-md-3">
              <NegativeReviews {...this.props.account} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <BestProperty {...this.props.account} />
            </div>
            <div className="col-md-3">
              <WorstProperty {...this.props.account} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function BrandScore({client, ratings}) {
  const repScore = calculateBrandRepScore(ratings);

  return (
    <div className="panel panel-default" style={{minHeight: '11em'}}>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-2">
            <h1>
              <span className={scoreStyle(repScore)}>
                {repScore}
              </span>
            </h1>
          </div>
          <div className="col-md-9 col-md-offset-1">
            <h3>{client.clientName}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Brand Rep Score</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialMedia({ratings}) {
  const socialMediaShares = calculateSocialMediaShares(ratings);

  return (
    <div className="panel panel-default" style={{minHeight: '11em'}}>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h2>{socialMediaShares}</h2>
          </div>
          <div className="col-md-6">
            <h3><i className={arrowStyle(10)}></i>{10}%</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Social Media Shares</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function PositiveReviews({ratings}) {
  const {total, change} = calculateReviewsData(ratings, 'positive');

  return (
    <div className="panel panel-default" style={{minHeight: '11em'}}>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h2>{total}</h2>
          </div>
          <div className="col-md-6">
            <h3><i className={arrowStyle(change)}></i>{change}%</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Positive Reviews</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function NegativeReviews({ratings}) {
  const {total, change} = calculateReviewsData(ratings, 'negative');

  return (
    <div className="panel panel-default" style={{minHeight: '11em'}}>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h2>{total}</h2>
          </div>
          <div className="col-md-6">
            <h3><i className={arrowStyle(change)}></i>{change}%</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Negative Reviews</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function BestProperty({hotels, ratings}) {
  const {hotel, score} = calculateBestProperty(hotels, ratings);

  return (
    <div className="panel panel-default" style={{minHeight: '11em'}}>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-9">
            <h3>{hotel.hotelName}</h3>
          </div>
          <div className="col-md-3">
            <h3>
              <span className={scoreStyle(score)}>{score}</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Best Performing Property</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorstProperty({hotels, ratings}) {
  const {hotel, score} = calculateWorstProperty(hotels, ratings);

  return (
    <div className="panel panel-default" style={{minHeight: '11em'}}>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-9">
            <h3>{hotel.hotelName}</h3>
          </div>
          <div className="col-md-3">
            <h3>
              <span className={scoreStyle(score)}>{score}</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Worst Performing Property</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
