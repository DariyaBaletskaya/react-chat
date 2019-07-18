import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { hideSpinner } from "../Spinner/actions";
import { loginUserAction } from "./authenticationActions";

class LoginPage extends Component {
  onHandleLogin = event => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email,
      password
    };

    this.props.loginUserAction(data);
  };

  componentDidMount() {
    this.props.hideSpinner();
  }

  render() {
    let response = this.props.response.response;
    let isAdmin = false;
    let isUser = false;
    let loginError = "";
    if (response) {
      // if (
      //   response.hasOwnProperty("name") &&
      //   response.hasOwnProperty("password")
      // ) {
      if (response[0].name === "admin" && response[0].password === "admin") {
        isAdmin = true;
      } else {
        isUser = true;
      }
      // } else {
      //   loginError = "Wrong credentials";
      // }
    }

    return (
      <div
        className="modal"
        style={{ display: "block" }}
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-header"
          style={{ margin: "1rem auto", width: "20rem" }}
        >
          <h3 className="modal-title" style={{ color: "#8b5d5d" }}>
            {loginError}
          </h3>
        </div>
        <div
          className="modal-dialog"
          role="document"
          style={{ marginTop: "8rem" }}
        >
          <div className="modal-content" style={{ padding: "3rem" }}>
            <div className="modal-header" style={{ marginBottom: "1rem" }}>
              <h3 className="modal-title">Login Page</h3>
            </div>

            {isAdmin ? (
              <Redirect
                to={{
                  pathname: "dashboard",
                  state: { from: this.props.location }
                }}
              />
            ) : null}
            {isUser ? (
              <Redirect
                to={{
                  pathname: "chat",
                  state: { from: this.props.location }
                }}
              />
            ) : null}
            <form onSubmit={this.onHandleLogin}>
              <div className="email-input form-group row">
                <label className="col-sm-3 col-form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="col-sm-7"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="col-sm-7"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div>
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  response: state.login
});
const mapDispatchToProps = {
  hideSpinner,
  loginUserAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
