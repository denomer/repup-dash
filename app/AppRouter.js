import React from 'react'
import {Router,Route,Link,IndexRoute} from 'react-router'
import Container from './Container'
import Dashboard from './dashboard/Dashboard'
import ReviewsGraph from './ReviewsGraph'
import FilteredReviews from './FilteredReviews'
import AnalysisView from './competitiveAnalysis/AnalysisView' 

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path="/" component={Container}>
          <IndexRoute component={Dashboard}/>
          <Route path="review-graph" component={ReviewsGraph}/>
          <Route path="filtered-reviews" component={FilteredReviews}/>
          <Route path="competitive-analysis" component={AnalysisView}/>
        </Route>
      </Router>
    );
    
  }
}

