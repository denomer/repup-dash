import React from 'react';

import needsAuth from 'app/util/hoc/needsAuth';
import Overview from './Overview';
import Properties from './Properties';

import account from 'app/store/account';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountLoaded: false,
      account: null
    };
  }

  componentWillMount() {
    account.get().then((data) => {
      this.setState({accountLoaded: true, account: data});
    });
  }

  render() {
    if (this.state.accountLoaded) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Overview {...this.state} />
            </div>
          </div>

          <div className="row marg-md-top-12 marg-md-bottom-12">
            <div className="col-md-12"><hr/></div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Properties {...this.state} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
}

export default needsAuth(Container);
