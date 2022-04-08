import React from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: {},
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = (data) => {
    const { name, password, password_confirmation } = data;
    if (!USER_REGEX.test(name)) {
      this.setState({
        errors: { name: "please set a username between 3 and 23 characters!" },
      });
    } else if (!PWD_REGEX.test(password)) {
      this.setState({
        errors: {
          password:
            "please enter a valid password of 8 characters(with a captital letter, a number and a special character)",
        },
      });
    } else if (password !== password_confirmation) {
      this.setState({
        errors: { password: "Passwords do not match!" },
      });
    } else {
      return true;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // validating user data
    const data = this.state;
    if (this.validate(data)) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div
        className="mh-fullscreen bg-img center-vh p-20"
        style={{ backgroundImage: "url(assets/img/bg-girl.jpg)" }}
      >
        <div
          className="card card-shadowed p-50 w-400 mb-0"
          style={{ maxWidth: "100%" }}
        >
          <h5 className="text-uppercase text-center">Register</h5>
          <br />
          <br />
          <form className="form-type-material" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Username"
              />
              {this.state.errors["name"] && (
                <small className="text-danger">
                  {this.state.errors["name"]}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Email address"
              />
              {this.state.errors["email"] && (
                <small className="text-danger">
                  {this.state.errors["email"]}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Password"
              />
              {this.state.errors["password"] && (
                <small className="text-danger">
                  {this.state.errors["password"]}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password_confirmation"
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Password (confirm)"
              />
            </div>
            <br />
            <button
              className="btn btn-bold btn-block btn-primary"
              type="submit"
            >
              Register
            </button>
          </form>
          <hr className="w-30" />
          <p className="text-center text-muted fs-13 mt-20">
            Already have an account?
            <a href="login.html">Sign in</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
