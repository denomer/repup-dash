import React from 'react';

import Overview from './Overview';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.history.pushState(null, '/login');
    }, 5000);

    console.log(this, this.props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Overview />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
