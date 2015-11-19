import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron ">
              <h1>Login</h1>
              <form>
                <div className="col-md-6 col-md-offset-3">
                  <div className="row">
                    <div className="input-group input-group-lg">
                      <input type="text" className="form-control" placeholder="Username" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
