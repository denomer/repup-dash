import React from 'react';

import {generateBarClass} from 'app/util/helpers';

export default class ReviewHighlights extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {title: 'Room Aminiteis and Experience', value: 70, keyword: 'quite clean'},
        {title: 'Washroom', value: 85, keyword: 'nice toileteries'},
        {title: 'Hotel', value: 65, keyword: 'nice ambience'},
        {title: 'Hotel Facilities', value: 82, keyword: 'fast service'},
        {title: 'Restaurant', value: 65, keyword: 'less variety'},
        {title: 'Front Desk', value: 70, keyword: 'fast checkin out'},
        {title: 'Internet', value: 40, keyword: 'poor wifi'}
      ]
    };
  }

  toggleDropdown(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body panel-body-table">
          <div className="table-responsive pad-md-bottom-20">
            <h4>Review Highlights</h4>
            <table className="table">
              <tbody>
                {this.state.data.map((content)=>{
                  return (
                    <tr className="row">
                      <td width="40%" className="col">{content.title}</td>
                      <td width="60%" className="col">
                        <div className="progress">
                          <div className={generateBarClass(content.value)}
                              role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                              style={{width: content.value +'%'}}
                          >
                            {content.value}%
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );
  }
}
