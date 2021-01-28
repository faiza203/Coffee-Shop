import React from "react";
import PropTypes from "prop-types";

import NavBar from "./Global/navbar.js";
import Footer from "./Global/footer";
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
