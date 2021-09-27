import React, { Component } from "react";
import NavbarComp from "./NavbarComp";

class ResturantCreate extends Component {
  constructor() {
    super();
    this.state = { name: null, rating: null, address: null, email: null };
  }
  createResturant = () => {
    fetch("http://localhost:3000/resturant", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).then((result) =>
      result.json().then((resp) => {
        console.log(resp);
        alert("Resturant is added in your list..Cheers!!");
      })
    );
  };
  render() {
    return (
      <div>
        <NavbarComp />
        <h1>ResturantCreate</h1>
        <br></br> <br></br>
        <input
          type="text"
          value={this.state.name}
          placeholder="Enter resturant name"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br></br> <br></br>
        <input
          type="text"
          value={this.state.rating}
          placeholder="Enter resturant rating"
          onChange={(e) => this.setState({ rating: e.target.value })}
        />
        <br></br> <br></br>
        <input
          type="text"
          value={this.state.address}
          placeholder="Enter resturant location"
          onChange={(e) => this.setState({ address: e.target.value })}
        />
        <br></br> <br></br>
        <input
          type="text"
          value={this.state.email}
          placeholder="Enter resturant mail"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br></br> <br></br>
        <button onClick={this.createResturant}>Submit</button>
        <br></br>
      </div>
    );
  }
}

export default ResturantCreate;
