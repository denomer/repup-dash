import React from 'react';
import {range} from '../util';

export default class ReviewTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h4>Review Timeline</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 col-md-offset-1">
                  <h4><span className="label label-primary">2018</span></h4>
                </div>
              </div>
              {range(0, 5).map(() =>{
                return (
                  <div className="row">
                    <div className="col-md-1">
                      <h4><span className="label label-default">Nov</span></h4>
                    </div>
                    <div className="col-md-offset-1 col-md-10">
                      <div className="well">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="panel panel-default">
                              <div className="panel-body">
                                A1
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
