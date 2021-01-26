import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <button type="button" class="btn btn-primary">Primary</button>
  </Layout>
);

export default IndexPage;
