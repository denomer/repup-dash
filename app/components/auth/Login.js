import React from 'react';
import {isFunction} from 'lodash';

import auth from 'app/store/auth';

import needsNoAuth from 'app/util/hoc/needsNoAuth';

class Login extends React.Component {
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

    auth.login({
      username: this.refs.username.value,
      password: this.refs.password.value
    }).then((data) => {
      if (isFunction(this.props.history.pushState)) {
        this.props.history.pushState(null, '/');
      }

      return data;
    }).catch((err) => {
      console.log(err);
      this.setState({hasErrors: true});
      setTimeout(() => { this.setState({hasErrors: false}); }, 3000);
    });
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

export default needsNoAuth(Login);
