import React from 'react'
import {Router,Route,Link,IndexRoute} from 'react-router'
import Container from './Container'
import Dashboard from './dashboard/Dashboard'
import ReviewsGraph from './reviews/ReviewsGraph'
import AnalysisView from './competitiveAnalysis/AnalysisView'
import Login from './auth/Login' 

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
          <Route path="competitive-analysis" component={AnalysisView}/>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
    );
    
  }
}

