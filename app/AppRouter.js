import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import GroupContainer from './group/Container';
import GroupOverview from './group/Overview';

import HotelContainer from './hotel/Container';
import HotelOverview from './hotel/Overview';
import HotelReviews from './hotel/Reviews';

import Login from './auth/Login';

import InWorksNotif from './InWorksNotif';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <InWorksNotif />
        <Router>
          <Route path="/login" component={Login}/>

          <Route path="/:hotelId" component={HotelContainer}>
            <IndexRoute component={HotelOverview} />
          </Route>

          <Route path="/" component={GroupContainer}>
            <IndexRoute component={GroupOverview}/>
          </Route>
        </Router>
      </div>
    );
  }
}
