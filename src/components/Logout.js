import React from "react";
import { Redirect } from "react-router-dom";
import NavbarComp from "./NavbarComp";
function Logout(props) {
  localStorage.clear();
  return (
    <div>
      <NavbarComp />
      <Redirect to="/login" />
    </div>
  );
}

export default Logout;
