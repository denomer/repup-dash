import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path="/" component={Container}>
          <IndexRoute component={GroupOverview}/>
          <Route path="login" component={Login}/>
          <Route path=":hotelId">
            <Route path="dashboard" component={Dashboard}/>
            <Route path="review-graph" component={ReviewsGraph}/>
            <Route path="competitive-analysis" component={AnalysisView}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

