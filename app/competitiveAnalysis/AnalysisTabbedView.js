import React from 'react';


export default class AnalysisTabbedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const style1 = {
      width:'85%'
    };
    const style2 = {
      width:'10%'
    };
    const style3 = {
      width:'5%'
    };

    return <div className="row">
      <div className="col-md-4">
        <table className="table table-stripped table-border">
          <tbody>
            <tr>
              <td><h3>Hilton Garden Inn Gurgaon</h3></td>
            </tr>
            <tr>
              <td><h6>Sector 50, Gurgaon 122002, India</h6></td>
            </tr>
            <tr>
              <td>
                  <div className="panel panel-default">
                      <div className="panel-header">
                        <h3>Tripadvisor</h3>
                      </div>
                      <div className="panel-body">
                        <table className="table table-stripped" valign="center">
                            <tbody>
                              <tr>
                                <td><h6>Total Reviews: 356</h6></td>
                              </tr>
                              <tr colspan="">
                                <td colspan="2">
                                  <div className="progress">
                                    <div className="progress-bar progress-bar-success" style={style1} >
                                      <span>85%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                      <span >10%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-danger" style={style3} >
                                      <span >5%</span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                      <div className="panel-footer">
                          <h6> Rank: 21 of 207 Hotels in Gurgaon</h6>
                      </div>
                  </div>
              </td>
            </tr>
            <tr>
              <td>
               <div className="panel panel-default">
                      <div className="panel-header">
                        <h3>Booking</h3>
                      </div>
                      <div className="panel-body">
                         <table className="table table-stripped" valign="center">
                            <tbody>
                              <tr>
                                <td><h6>Total Reviews: 356</h6> </td>
                              </tr>
                              <tr>
                                <td colspan="2">
                                  <div className="progress">
                                    <div className="progress-bar progress-bar-success" style={style1} >
                                      <span>85%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                      <span >10%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-danger" style={style3} >
                                      <span >5%</span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                      <div className="panel-footer">
                          <h6> Rank: 7.5  </h6> 
                      </div>
                  </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Expedia</h3>
                  </div>
                  <div className="panel-body">
                   <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                     <h6> Rank: 7.5  </h6> 
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Goibibo</h3>
                  </div>
                  <div className="panel-body">
                    <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                      <h6> Rank: 7.5 </h6> 
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Agoda</h3>
                  </div>
                  <div className="panel-body">                  
                   <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                     <h6> Rank: 7.5  </h6> 
                  </div>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div className="col-md-4">
          <table className="table table-stripped table-border">
          <tbody>
            <tr>
              <td><h3>Hilton Garden Inn Gurgaon</h3></td>
            </tr>
            <tr>
              <td><h6>Sector 50, Gurgaon 122002, India</h6></td>
            </tr>
            <tr>
              <td>
                  <div className="panel panel-default">
                      <div className="panel-header">
                        <h3>Tripadvisor</h3>
                      </div>
                      <div className="panel-body">
                        <table className="table table-stripped" valign="center">
                            <tbody>
                              <tr>
                                <td><h6>Total Reviews: 356</h6></td>
                              </tr>
                              <tr colspan="">
                                <td colspan="2">
                                  <div className="progress">
                                    <div className="progress-bar progress-bar-success" style={style1} >
                                      <span>85%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                      <span >10%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-danger" style={style3} >
                                      <span >5%</span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                      <div className="panel-footer">
                          <h6> Rank: 21 of 207 Hotels in Gurgaon</h6>
                      </div>
                  </div>
              </td>
            </tr>
            <tr>
              <td>
               <div className="panel panel-default">
                      <div className="panel-header">
                        <h3>Booking</h3>
                      </div>
                      <div className="panel-body">
                         <table className="table table-stripped" valign="center">
                            <tbody>
                              <tr>
                                <td><h6>Total Reviews: 356</h6> </td>
                              </tr>
                              <tr>
                                <td colspan="2">
                                  <div className="progress">
                                    <div className="progress-bar progress-bar-success" style={style1} >
                                      <span>85%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                      <span >10%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-danger" style={style3} >
                                      <span >5%</span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                      <div className="panel-footer">
                          <h6> Rank: 7.5  </h6> 
                      </div>
                  </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Expedia</h3>
                  </div>
                  <div className="panel-body">
                   <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                     <h6> Rank: 7.5  </h6> 
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Goibibo</h3>
                  </div>
                  <div className="panel-body">
                    <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                      <h6> Rank: 7.5 </h6> 
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Agoda</h3>
                  </div>
                  <div className="panel-body">                  
                   <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                     <h6> Rank: 7.5  </h6> 
                  </div>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div className="col-md-4">
          <table className="table table-stripped table-border">
          <tbody>
            <tr>
              <td><h3>Hilton Garden Inn Gurgaon</h3></td>
            </tr>
            <tr>
              <td><h6>Sector 50, Gurgaon 122002, India</h6></td>
            </tr>
            <tr>
              <td>
                  <div className="panel panel-default">
                      <div className="panel-header">
                        <h3>Tripadvisor</h3>
                      </div>
                      <div className="panel-body">
                        <table className="table table-stripped" valign="center">
                            <tbody>
                              <tr>
                                <td><h6>Total Reviews: 356</h6></td>
                              </tr>
                              <tr colspan="">
                                <td colspan="2">
                                  <div className="progress">
                                    <div className="progress-bar progress-bar-success" style={style1} >
                                      <span>85%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                      <span >10%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-danger" style={style3} >
                                      <span >5%</span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                      <div className="panel-footer">
                          <h6> Rank: 21 of 207 Hotels in Gurgaon</h6>
                      </div>
                  </div>
              </td>
            </tr>
            <tr>
              <td>
               <div className="panel panel-default">
                      <div className="panel-header">
                        <h3>Booking</h3>
                      </div>
                      <div className="panel-body">
                         <table className="table table-stripped" valign="center">
                            <tbody>
                              <tr>
                                <td><h6>Total Reviews: 356</h6> </td>
                              </tr>
                              <tr>
                                <td colspan="2">
                                  <div className="progress">
                                    <div className="progress-bar progress-bar-success" style={style1} >
                                      <span>85%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                      <span >10%</span>
                                    </div>
                                    <div className="progress-bar progress-bar-danger" style={style3} >
                                      <span >5%</span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                      <div className="panel-footer">
                          <h6> Rank: 7.5  </h6> 
                      </div>
                  </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Expedia</h3>
                  </div>
                  <div className="panel-body">
                   <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                     <h6> Rank: 7.5  </h6> 
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Goibibo</h3>
                  </div>
                  <div className="panel-body">
                    <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                      <h6> Rank: 7.5 </h6> 
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="panel panel-default">
                  <div className="panel-header">
                    <h3>Agoda</h3>
                  </div>
                  <div className="panel-body">                  
                   <table className="table table-stripped" valign="center">
                      <tbody>
                        <tr>
                          <td><h6>Total Reviews: 356</h6> </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <div className="progress">
                              <div className="progress-bar progress-bar-success" style={style1} >
                                <span>85%</span>
                              </div>
                              <div className="progress-bar progress-bar-warning progress-bar-striped" style={style2} >
                                <span >10%</span>
                              </div>
                              <div className="progress-bar progress-bar-danger" style={style3} >
                                <span >5%</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                     <h6> Rank: 7.5  </h6> 
                  </div>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  }
}
