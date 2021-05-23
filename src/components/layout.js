import React from "react";
import PropTypes from "prop-types";

import {NavBar , Footer} from "./Global";
import "./layout.css";
import "./bootstrap.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

