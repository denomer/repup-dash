import React from 'react';
import {Link} from 'react-router';

export default class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  filteredHotels() {
    return this.props.account.hotels.filter((hotel) => {
      if (this.state.searchTerm.length > 0) {
        return hotel.hotelName.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1;
      } else {
        return true;
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Your Properties</h1>

          <form className="row marg-md-top-5 marg-md-bottom-20"
            onSubmit={(() => this.setState({searchTerm: this.refs.search.value}))}
          >
            <div className="col-md-6">
              <input type="text" ref="search" className="form-control"
                onKeyUp={(() => this.setState({searchTerm: this.refs.search.value}))}
                placeholder="Filter your properties"/>
            </div>
          </form>

          <div className="row">
            {((hotels) => {
              if (hotels.length === 0) {
                return (
                  <div className="col-md-12">
                    <div className="well">
                      <h2 className="text-muted">
                        Sorry, No Hotels found matching your search.
                      </h2>
                    </div>
                  </div>
                );
              } else {
                return hotels.map((hotel, i) => <Hotel key={i} {...{hotel}}/>);
              }
            })(this.filteredHotels())}
          </div>
        </div>
      </div>
    );
  }
}

function Hotel({hotel}) {
  return (
    <div className="col-md-3">
      <Link to={`/${hotel.hotelId}`}>
        <div className="panel panel-default" style={{minHeight: '13em'}}>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
                <h3>{hotel.hotelName}</h3>
                <h5>{hotel.hotelAddress}</h5>
                <h4>{hotel.tripadvisorRank}</h4>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
