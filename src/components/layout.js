import React from "react";
import PropTypes from "prop-types";

import "./layout.css";
import "./bootstrap.css"

const Layout = ({ children }) => <>{children} </>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
