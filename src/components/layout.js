import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";

const Layout = ({ children }) => <>{children} </>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
