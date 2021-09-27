import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarComp from "./NavbarComp";

class ResturantUpdate extends Component {
  constructor() {
    super();
    this.state = { name: null, rating: null, address: null, email: null };
  }
  componentDidMount() {
    console.log("update Saksham", this.props);
    fetch("http://localhost:3000/resturant/" + this.props.match.params.id).then(
      (result) =>
        result.json().then((data) => {
          console.log(data, "resta");
          this.setState({
            name: data.name,
            rating: data.rating,
            address: data.address,
            email: data.email,
          });
        })
    );
  }
  update = () => {
    fetch("http://localhost:3000/resturant/" + this.props.match.params.id, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).then((result) =>
      result.json().then((resp) => {
        console.log(resp);
        alert("Resturant is UPDATED in your list..Hurray!!");
      })
    );
  };
  render() {
    //   console.log("update_props", this.props.match.params.id);
    return (
      <div>
        <NavbarComp />
        <h1>ResturantUpdate</h1>
        <div>
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
          <button onClick={this.update}>Update</button>
          <br></br>
        </div>
      </div>
    );
  }
}

export default ResturantUpdate;
