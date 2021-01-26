import React from "react";
import PropTypes from "prop-types";

import NavBar from "./global/navbar.js";
import "./layout.css";
import "./bootstrap.css";

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}{" "}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
