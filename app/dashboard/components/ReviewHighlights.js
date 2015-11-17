import React from 'react';

export default class ReviewHighlights extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      dropdown: {open: false},

    };
  }

  toggleDropdown(ev) {
    ev.preventDefault();
    this.setState({dropdown: {open: !this.state.dropdown.open}});
  }

  render(){
    const style = {
      width:'70%'
    };

    const dropdownClass = () => {
      return this.state.dropdown.open ? 'dropdown clearfix open' : 'dropdown clearfix';
    };

    return (
      <div className="panel panel-default">
        <div className="panel-body panel-body-table">
          <div className="table-responsive">
            <h4>Review Highlights</h4>
            <table className="table">
              <tbody>
              
                <tr className="row">
                  <td width="33%" className="col">BreakFast</td>
                  <td width="33%" className="col">
                    <div className="progress">
                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={style}>
                        70%
                      </div>
                    </div>
                  </td>
                  <td width="33%" className="col">
                  Good
                  </td>
                  <td width="1%" className="col">
                    <div className={dropdownClass()}>
                      <a href="#" onClick={this.toggleDropdown.bind(this)}>
                        <i className="glyphicon glyphicon-triangle-bottom"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li><a href="#">View</a></li>
                        <li><a href="#">Report </a></li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );
  }

}