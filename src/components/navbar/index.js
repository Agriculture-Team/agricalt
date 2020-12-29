import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {

  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Navbar;
