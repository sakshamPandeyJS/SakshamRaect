import React, { Component } from "react";
import { Table, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavbarComp from "./NavbarComp";

class ResturantSearch extends Component {
  constructor() {
    super();
    this.state = { searchData: "", noData: false, lastSearch: "" };
  }
  search = (key) => {
    this.setState({ lastSearch: key });
    console.log(key);
    fetch("http://localhost:3000/resturant?q=" + key).then((result) =>
      result.json().then((data) => {
        if (data.length > 0) {
          this.setState({ searchData: data, noData: false });
        } else {
          this.setState({ noData: true, searchData: "" });
        }
      })
    );
    console.log(this.state.searchData);
  };
  delete = (id) => {
    fetch("http://localhost:3000/resturant/" + id, {
      method: "DELETE",
    }).then((result) =>
      result.json().then(() => {
        alert("Restuarants Deleted");
        this.search(this.state.lastSearch); // this will help us to keep the search because once item is deleted it will call the search function with the last input value and will show again results
      })
    );
  };
  render() {
    return (
      <Container>
        <NavbarComp />
        <h1>ResturantSearch</h1>
        <Form.Control
          type="text"
          onChange={(e) => {
            this.search(e.target.value);
          }}
          placeholder="Enter Resturant"
        />

        <div>
          {this.state.searchData ? (
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
                <tbody>
                  {this.state.searchData.map((item) => (
                    <tr>
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
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>{this.state.noData ? <div>No data found</div> : ""}</div>
      </Container>
    );
  }
}

export default ResturantSearch;
