import React from 'react';

import {scoreStyle, arrowStyle} from 'app/util/helpers';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreInfo: {
        title: 'Score', score: '70', changed: '5'
      }
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <BrandScore panel={this.state.scoreInfo} {...this.props} />
            </div>
            <div className="col-md-3">
              <SocialMedia {...this.props} />
            </div>
            <div className="col-md-3">
              <PositiveReviews {...this.props} />
            </div>
            <div className="col-md-3">
              <NegativeReviews {...this.props} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <BestProperty {...this.props} />
            </div>
            <div className="col-md-3">
              <WorstProperty {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function BrandScore(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-2">
            <h1>
              <span className={scoreStyle(props.panel.score)}>
                {props.panel.score}
              </span>
            </h1>
          </div>
          <div className="col-md-9 col-md-offset-1">
            <div className="row">
              <div className="col-md-12">
                <h3>{props.client.clientName}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <i className={arrowStyle(props.panel.changed)}></i>{props.panel.changed}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialMedia(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h2>432</h2>
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

function PositiveReviews(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h2>68</h2>
          </div>
          <div className="col-md-6">
            <h3><i className={arrowStyle(10)}></i>{10}%</h3>
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

function BrandScore(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-2">
            <h1>
              <span className={scoreStyle(props.panel.score)}>
                {props.panel.score}
              </span>
            </h1>
          </div>
          <div className="col-md-9 col-md-offset-1">
            <div className="row">
              <div className="col-md-12">
                <h3>{props.client.clientName}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <i className={arrowStyle(props.panel.changed)}></i>{props.panel.changed}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialMedia(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h2>432</h2>
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

function NegativeReviews(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h2>16</h2>
          </div>
          <div className="col-md-6">
            <h3><i className={arrowStyle(-15)}></i>{-15}%</h3>
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

function BestProperty(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-9">
            <h3>Lemon Tree Jaipur</h3>
          </div>
          <div className="col-md-3">
            <h3>
              <span className={scoreStyle(78)}>
                {78}
              </span>
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

function WorstProperty(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-9">
            <h3>Lemon Tree Gurgaon</h3>
          </div>
          <div className="col-md-3">
            <h3>
              <span className={scoreStyle(42)}>
                {42}
              </span>
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
