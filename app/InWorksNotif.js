import React from 'react';

import {range} from 'lodash';

import api from './util/api';

export default class InWorksNotif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      ellipses: 0
    };

    this.apiWatcherInterval = null;
    this.ellipsesInterval = null;
  }

  componentDidMount() {
    this.startApiWatcherInterval();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.show === false && this.state.show === true) {
      this.startEllipsesInterval();
    } else if (prevState.show === true && this.state.show === false) {
      this.clearEllipsesInterval();
    }
  }

  componentWillUnmount() {
    this.clearApiWatcherInterval();
  }

  startApiWatcherInterval() {
    this.clearApiWatcherInterval();
    this.apiWatcherInterval = setInterval(() => {
      if (api.activeRequests.size > 0) {
        this.setState({show: true});
      } else {
        this.setState({show: false});
      }
    }, 200);
  }

  clearApiWatcherInterval() {
    if (this.apiWatcherInterval !== null) {
      clearInterval(this.apiWatcherInterval);
      this.apiWatcherInterval = null;
    }
  }

  startEllipsesInterval() {
    this.clearEllipsesInterval();
    this.ellipsesInterval = setInterval(() => {
      this.setState({ellipses: ((this.state.ellipses+1)%4)});
    }, 500);
  }

  clearEllipsesInterval() {
    if (this.ellipsesInterval !== null) {
      clearInterval(this.ellipsesInterval);
      this.ellipsesInterval = null;
      this.setState({ellipses: 0});
    }
  }

  render() {
    if (this.state.show) {
      return (
        <div className="in-works-marker label label-warning">
          <span>
            Working
            {range(0, this.state.ellipses).map((key) => {
              return <span {...{key}}>.</span>;
            })}
            {range(this.state.ellipses, 3).map((key) => {
              return <span {...{key}}>&nbsp;</span>;
            })}
          </span>
        </div>
      );
    } else {
      return <span/>;
    }
  }
}
