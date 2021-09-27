import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavbarComp from "./NavbarComp";

class ResturantList extends Component {
  constructor() {
    super();
    this.state = { list: null };
  }
  getData = () => {
    console.log("get data called");
    fetch("http://localhost:3000/resturant").then((response) => {
      response.json().then((result) => this.setState({ list: result }));
    });
  };

  componentDidMount() {
    this.getData();
  }
  delete = (id) => {
    fetch("http://localhost:3000/resturant/" + id, {
      method: "DELETE",
    }).then((result) =>
      result.json().then(() => {
        alert("Restuarants Deleted");
        this.getData();
      })
    );
  };
  render() {
    console.log(this.state.list, "Saksham");
    return (
      <div>
        <NavbarComp />
        <h1>ResturantList</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Rating</th>
                  <th>Mail-Us</th>
                  <th>Operation</th>
                </tr>
              </thead>

              {this.state.list.map((item, i) => (
                // <div className="wrapper">

                <tbody>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.rating}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>

                      <div></div>
                      <span onClick={() => this.delete(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        ) : (
          <p>Please wait...</p>
        )}
      </div>
    );
  }
}

export default ResturantList;
