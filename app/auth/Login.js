import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrors: false
    };
  }

  attemptLogin(ev) {
    if (ev) {
      ev.preventDefault();
    }

    const data = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron ">
              <h1>Login</h1>
              <form onSubmit={this.attemptLogin.bind(this)}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-12">
                        <input type="text" ref="username"
                          className="form-control marg-md-7" placeholder="Username" />
                        <input type="password" ref="password"
                          className="form-control col-md-3 marg-md-7" placeholder="Password"/>
                        <button className="btn btn-lg btn-primary marg-md-7">Go</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {(() => {
                if (this.state.hasErrors) {
                  return <p className="text-danger">Invalid Username/Password</p>;
                } else {
                  return <span></span>;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
