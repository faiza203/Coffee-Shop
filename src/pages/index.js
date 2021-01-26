import React from "react";
import { FaGulp } from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/global/backgroundSection.js";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home</h1>
    <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Regular Joe's"
        styleClass="default-background"
    />
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
