import React from 'react';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panels: [
        {title: 'Galaxy Hotel & Spa', subtitle: 'Sector 15, Gurgaon'},
        {title: 'RepScore', subtitle: '68.25'},
        {title: 'TripAdvisor', subtitle: '#541 of 204'},
        {title: 'RankUp Reviews', subtitle: '7 (impact on RepScore +5.21)'}
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.panels.map((panel) => {
          return (
            <div className="col-md-3">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h4>{panel.title}</h4>
                  <span className="text-small">{panel.subtitle}</span>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    );
  }
}