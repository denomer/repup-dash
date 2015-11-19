import React from 'react';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripadvisorInfo:{title:'Tripadvisor Rank',tripadvisorRank:'27',tripadvisorCatagoryCount:'274 hotels in Gurgaon',tripadvisorRankChanged:'+4'},
      positiveReviewsInfo:{title:'Positive Reviews',positiveReviews:'7',changed:'-1'},
      negativeReviewsInfo:{title:'Negative Reviews',negativeReviews:'3',changed:'-2'},
      scoreInfo:{title:'Score',score:'65',changed:'5'}
    };
  }

  render() {
    return (
      <div className="container">
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
    );
  }
}

function HotelInfoPanel(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <h4>{props.panel.title}</h4>
        <span className="text-small">{props.panel.subtitle}</span>
      </div>
    </div>
  );
}

function ScorePanel(props){
  return(
       <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-md-12">
             <h3>
              <span className={scoreStyle(props.panel.score)}>{props.panel.score}</span>
              <span className="pull-right"><i className={arrowStyle(props.panel.changed)}></i>{Math.abs(props.panel.changed)}%</span>
            </h3>
          </div>
          <div className="col-md-12">
           <span className="text-small">{props.panel.title}</span>
          </div>
         
        </div>
      </div>
    );
}

function TripadvisorPanel(props){
  return(
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-md-12">
             <h3>
              <span className="pull-left">#{props.panel.tripadvisorRank}</span>
              <span className="pull-right"><i className={arrowStyle(props.panel.tripadvisorRankChanged)}></i>{Math.abs(props.panel.tripadvisorRankChanged)}</span>
            </h3>
          </div>
          <div className="col-md-12">
           <span className="small text-muted">of {props.panel.tripadvisorCatagoryCount}</span>
          </div>
         
        </div>
      </div>
    );
}

function PositiveReviewsPanel(props){
  return(
       <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-md-12">
             <h3>
              <span className="pull-left">{props.panel.positiveReviews}</span>
              <span className="pull-right"><i className={arrowStyle(props.panel.changed)}></i>{Math.abs(props.panel.changed)}%</span>
            </h3>
          </div>
          <div className="col-md-12">
          {props.panel.title}
          </div>
         
        </div>
      </div>
    );
}

function NegativeReviewsPanel(props){
  return(
       <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-md-12">
             <h3>
              <span className="pull-left">{props.panel.negativeReviews}</span>
              <span className="pull-right"><i className={arrowStyleNegativeReviews(props.panel.changed)}></i>{Math.abs(props.panel.changed)}%</span>
            </h3>
          </div>
          <div className="col-md-12">
           {props.panel.title}
          </div>
         
        </div>
      </div>
    );
}

function arrowStyle(value){
  if(value>0)
    return 'glyphicon glyphicon-arrow-up text-success';
  else
    return 'glyphicon glyphicon-arrow-down text-danger';
  
}

function arrowStyleNegativeReviews(value){
  if(value>0)
    return 'glyphicon glyphicon-arrow-up text-danger';
  else
    return 'glyphicon glyphicon-arrow-down text-success';
  
}

function scoreStyle(value){
  if(value>=75)
    return 'pull-left numberCircle numberCircle-success';
  else if(value<75 && value>=60)
    return 'pull-left numberCircle numberCircle-warning';
  else 
    return 'pull-left numberCircle numberCircle-danger';
}
