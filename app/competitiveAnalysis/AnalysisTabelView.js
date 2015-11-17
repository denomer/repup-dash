import React from 'react'


export default class AnalysisTabelView extends React.Component {   
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rep Score</th>
            <th>Locationi</th>
            <th>Rooms</th>
            <th>Services</th>
            <th>Facilities</th>
            <th>Food</th>
            <th>Internet</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {this.props.analysisData.map((data) => {
            return (
              <tr>
                <td>{data.repSocre}</td>
                <td>{data.location}</td>
                <td>{data.rooms}</td>
                <td>{data.services}</td>
                <td>{data.facilities}</td>
                <td>{data.food}</td>
                <td>{data.internet}</td>
                <td>{data.tripRank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
} 