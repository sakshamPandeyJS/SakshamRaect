import React, { Component } from "react";
import NavbarComp from "./NavbarComp";

class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }
  login = () => {
    console.log(this.state);
    fetch("http://localhost:3000/login?q=" + this.state.email).then((result) =>
      result.json().then((data) => {
        console.log(data, data.length);
        if (data.length > 0) {
          localStorage.setItem("login", JSON.stringify(data));
          this.props.history.push("list");
        } else {
          alert("Enter Valid Details");
        }
      })
    );
  };

  render() {
    return (
      <div>
        <NavbarComp />
        <label>
          <h3>Login</h3>
        </label>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter name"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />
        <button onClick={this.login}> Login</button>
      </div>
    );
  }
}

export default Login;
