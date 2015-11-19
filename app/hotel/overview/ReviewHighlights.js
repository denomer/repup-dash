import React from 'react';
import {createElement} from 'react';
import dropdown from 'app/util/hoc/dropdown';

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
    const generateBarClass = (value) => {
      if (value>=75) {
        return 'progress-bar progress-bar-success';
      } else if (value<75 && value>=60) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-danger';
      }
    };

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
                      <td width="33%" className="col">{content.title}</td>
                      <td width="33%" className="col">
                        <div className="progress">
                          <div className={generateBarClass(content.value)}
                              role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                              style={{width: content.value +'%'}}
                          >
                            {content.value}%
                          </div>
                        </div>
                      </td>
                      <td width="33%" className="col">
                      {content.keyword}
                      </td>
                      <td width="1%" className="col">
                        {createElement(dropdown((props) => (
                          <div className={props.dropdownClass('dropdown clearfix')}>
                            <a href="#" onClick={props.toggleDropdown} data-control>
                              <i className="glyphicon glyphicon-triangle-bottom"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li><a href="#">View</a></li>
                              <li><a href="#">Report </a></li>
                            </ul>
                          </div>
                        )))}
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
