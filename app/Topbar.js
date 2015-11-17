import React from 'react';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panels: [
        {title: 'Hotel Name', subtitle: 'Hotel Address'},
        {title: 'RepScore', subtitle: '68.25'},
        {title: 'TripAdvisor', subtitle: '#541'},
        {title: 'RankUp Reviews', subtitle: '7'}
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
                <h3>{panel.title}</h3>
                <span className="text-small">{panel.subtitle}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}