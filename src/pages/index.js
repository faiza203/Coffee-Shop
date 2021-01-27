import React from "react";
import { FaGulp } from "react-icons/fa";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Global/backgroundSection.js";
import Info from "../components/Home/info.js";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Regular Joe's"
      styleClass="default-background"
    />
    <Info />
    <FaGulp />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
