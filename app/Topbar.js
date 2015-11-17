import React from 'react';

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="widget widget-primary widget-item-icon">
              <div className="widget-item-left">
                <span className="fa fa-user"></span>
              </div>
              <div className="widget-data">
                  <div className="widget-int num-count">599</div>
                  <div className="widget-title">Registred users</div>
                  <div className="widget-subtitle">On our website and app</div>
              </div>
              <div className="widget-controls">                                
                  <a href="#" className="widget-control-right"><span className="fa fa-times"></span></a>
              </div>                            
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget widget-primary widget-item-icon">
              <div className="widget-item-left">
                <span className="fa fa-user"></span>
              </div>
              <div className="widget-data">
                  <div className="widget-int num-count">599</div>
                  <div className="widget-title">Registred users</div>
                  <div className="widget-subtitle">On our website and app</div>
              </div>
              <div className="widget-controls">                                
                  <a href="#" className="widget-control-right"><span className="fa fa-times"></span></a>
              </div>                            
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget widget-primary widget-item-icon">
              <div className="widget-item-left">
                <span className="fa fa-user"></span>
              </div>
              <div className="widget-data">
                  <div className="widget-int num-count">599</div>
                  <div className="widget-title">Registred users</div>
                  <div className="widget-subtitle">On our website and app</div>
              </div>
              <div className="widget-controls">                                
                  <a href="#" className="widget-control-right"><span className="fa fa-times"></span></a>
              </div>                            
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget widget-primary widget-item-icon">
              <div className="widget-item-left">
                <span className="fa fa-user"></span>
              </div>
              <div className="widget-data">
                  <div className="widget-int num-count">599</div>
                  <div className="widget-title">Registred users</div>
                  <div className="widget-subtitle">On our website and app</div>
              </div>
              <div className="widget-controls">                                
                  <a href="#" className="widget-control-right"><span className="fa fa-times"></span></a>
              </div>                            
            </div>
          </div>
        </div>       
      </div>
    );
  }
}