import React from 'react';
import {Link} from 'react-router';

import {arrowStyle, arrowStyleNegativeReviews, scoreStyle} from 'app/util/helpers';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripadvisorInfo: {
        title: 'Tripadvisor Rank', tripadvisorRank: '27',
        tripadvisorCatagoryCount: '274 hotels in Gurgaon', tripadvisorRankChanged: '+4'
      },
      positiveReviewsInfo: {
        title: 'Positive Reviews', positiveReviews: '7', changed: '-1'
      },
      negativeReviewsInfo: {
        title: 'Negative Reviews', negativeReviews: '3', changed: '-2'
      },
      scoreInfo: {
        title: 'Score', score: '65', changed: '5'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1">
            <div className="panel panel-default">
              <div className="panel-body">
                <h1>
                  <Link to="/">
                    <span className="glyphicon glyphicon-th"></span>
                  </Link>
                </h1>
              </div>
            </div>
          </div>

          <div className="col-md-11">
            <div className="row">
              <div className="col-md-3">
                <ScorePanel panel={this.state.scoreInfo}/>
              </div>
              <div className="col-md-3">
                <TripadvisorPanel panel={this.state.tripadvisorInfo}/>
              </div>
              <div className="col-md-3">
                <PositiveReviewsPanel panel={this.state.positiveReviewsInfo}/>
              </div>
              <div className="col-md-3">
                <NegativeReviewsPanel panel={this.state.negativeReviewsInfo}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function ScorePanel(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-12">
            <h3>
              <span className={scoreStyle(props.panel.score)}>
                {props.panel.score}
              </span>
              <span className="pull-right">
                <i className={arrowStyle(props.panel.changed)}></i>{props.panel.changed}%
              </span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="text-small">{props.panel.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TripadvisorPanel(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="col-md-12">
           <h3>
            <span className="pull-left">#{props.panel.tripadvisorRank}</span>
            <span className="pull-right">
              <i className={arrowStyle(props.panel.tripadvisorRankChanged)}></i>{props.panel.tripadvisorRankChanged}
            </span>
          </h3>
        </div>
        <div className="col-md-12">
         <span className="small text-muted">of {props.panel.tripadvisorCatagoryCount}</span>
        </div>
      </div>
    </div>
    );
}

function PositiveReviewsPanel(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="col-md-12">
           <h3>
            <span className="pull-left">{props.panel.positiveReviews}</span>
            <span className="pull-right">
              <i className={arrowStyle(props.panel.changed)}></i>{props.panel.changed}%
            </span>
          </h3>
        </div>
        <div className="col-md-12">
          {props.panel.title}
        </div>
      </div>
    </div>
  );
}

function NegativeReviewsPanel(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="col-md-12">
           <h3>
            <span className="pull-left">{props.panel.negativeReviews}</span>
            <span className="pull-right">
              <i className={arrowStyleNegativeReviews(props.panel.changed)}></i>{props.panel.changed}%
            </span>
          </h3>
        </div>
        <div className="col-md-12">
         {props.panel.title}
        </div>
      </div>
    </div>
  );
}
