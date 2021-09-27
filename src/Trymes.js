import React, { Component } from "react";

class trymes extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(this.props.params);
  }
  render() {
    return <div>Hello </div>;
  }
}

export default trymes;
