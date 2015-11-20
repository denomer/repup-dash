import React from 'react';
import {range} from 'lodash';
import {createElement} from 'react';
import dropdown from 'app/util/hoc/dropdown';

export default class TimeLineTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {title: 'TripAdvisor', href: '#'},
        {title: 'Booking', href: '#'},
        {title: 'Expedia', href: '#'},
        {title: 'MakeMyTrip', href: '#'}
      ],
      activeTab: null
    };

    this.state.activeTab = this.state.tabs[0];
  }

  activateTab(tab, ev) {
    if (ev) {
      ev.preventDefault();
    }

    this.setState({activeTab: tab});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <h4>Review Timeline</h4>
          <ul className="nav nav-pills">
            {this.state.tabs.map((tab) => {
              return (
                <li className={tab === this.state.activeTab ? 'active' : ''}>
                  <a href={tab.href} onClick={this.activateTab.bind(this, tab)}>{tab.title}</a>
                </li>
              );
            })}
          </ul>
          <div className="tab-content">
            {(() => {
              switch(this.state.activeTab.title) {
                case 'TripAdvisor': return <TripAdvisor name={'xyz'}/> 
                case 'Booking': return <Booking name={'xyz'}/> 
                case 'Expedia': return <Expedia name={'xyz'}/> 
                case 'MakeMyTrip': return <MakeMyTrip name={'xyz'}/> 
              }
            })()}
          </div>
        </div>
      </div> 
    );
  }
}

function TripAdvisor({name}) {
  return (
    <div className="tab-pane fade in active">
      <h3>TripAdvisor</h3>
      {range(0,5).map(()=>{
        return (
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-md-11">
                nkjadsadndndnkjadjsdklsdsabldsdbjsadjsdjsdasjdsdasdbjsdjasdlsdlsdadsldsdlasdjlasdsdsadasdasdasdasdasd
              </div>
              <div className="col-md-1">
              {createElement(dropdown((props) => (
                <div className={props.dropdownClass('dropdown clearfix')}>
                  <a href="#" onClick={props.toggleDropdown} data-control>
                    <i className="glyphicon glyphicon-triangle-bottom"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="#">Reply</a></li>
                    <li><a href="#">Raise Ticket </a></li>
                    <li><a href="#">Post on Facebook</a></li>
                    <li><a href="#">Post on Twitter</a></li>
                  </ul>
                </div>
              )))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Booking({name}) {
  return (
    <div className="tab-pane fade in active">
      <h3>Booking</h3>
      {range(0,5).map(()=>{
        return (
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-md-11">
                nkjadsadndndnkjadjsdklsdsabldsdbjsadjsdjsdasjdsdasdbjsdjasdlsdlsdadsldsdlasdjl
              </div>
              <div className="col-md-1">
              {createElement(dropdown((props) => (
                <div className={props.dropdownClass('dropdown clearfix')}>
                  <a href="#" onClick={props.toggleDropdown} data-control>
                    <i className="glyphicon glyphicon-triangle-bottom"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="#">Reply</a></li>
                    <li><a href="#">Raise Ticket </a></li>
                    <li><a href="#">Post on Facebook</a></li>
                    <li><a href="#">Post on Twitter</a></li>
                  </ul>
                </div>
              )))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Expedia({name}) {
  return (
    <div className="tab-pane fade in active">
      <h3>Expedia</h3>
      {range(0,5).map(()=>{
        return (
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-md-11">
                nkjadsadndndnkjadjsdklsdsabldsdbjsadjsdjsdasjdsdasdbjsdjasdlsdlsdadsldsdlasdjl
              </div>
              <div className="col-md-1">
              {createElement(dropdown((props) => (
                <div className={props.dropdownClass('dropdown clearfix')}>
                  <a href="#" onClick={props.toggleDropdown} data-control>
                    <i className="glyphicon glyphicon-triangle-bottom"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="#">Reply</a></li>
                    <li><a href="#">Raise Ticket </a></li>
                    <li><a href="#">Post on Facebook</a></li>
                    <li><a href="#">Post on Twitter</a></li>
                  </ul>
                </div>
              )))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MakeMyTrip({name}) {
  return (
    <div className="tab-pane fade in active">
      <h3>MakeMyTrip</h3>
      {range(0,5).map(()=>{
        return (
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-md-11">
                nkjadsadndndnkjadjsdklsdsabldsdbjsadjsdjsdasjdsdasdbjsdjasdlsdlsdadsldsdlasdjl
              </div>
              <div className="col-md-1">
              {createElement(dropdown((props) => (
                <div className={props.dropdownClass('dropdown clearfix')}>
                  <a href="#" onClick={props.toggleDropdown} data-control>
                    <i className="glyphicon glyphicon-triangle-bottom"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="#">Reply</a></li>
                    <li><a href="#">Raise Ticket </a></li>
                    <li><a href="#">Post on Facebook</a></li>
                    <li><a href="#">Post on Twitter</a></li>
                  </ul>
                </div>
              )))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
