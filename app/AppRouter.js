import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import InWorksNotif from './components/InWorksNotif';

import Login from './components/auth/Login';

import GroupContainer from './components/group/Container';
import GroupOverview from './components/group/Overview';

import HotelContainer from './components/hotel/Container';
import HotelOverview from './components/hotel/Overview';
import HotelReviews from './components/hotel/Reviews';
import HotelCompetitiveAnalysis from './components/hotel/CompetitiveAnalysis';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <InWorksNotif />
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Route path="/login" component={Login}/>

          <Route path="/:hotelId" component={HotelContainer}>
            <IndexRoute component={HotelOverview} />
            <Route path="reviews" component={HotelReviews}/>
            <Route path="competitive-analysis" component={HotelCompetitiveAnalysis}/>
          </Route>

          <Route path="/" component={GroupContainer}>
            <IndexRoute component={GroupOverview}/>
          </Route>
        </Router>
      </div>
    );
  }
}
