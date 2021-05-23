import React from "react";
import { FaGulp } from "react-icons/fa";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {BackgroundSection} from "../components/Global";
import Info from "../components/Home/aboutMe";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    />
    <Info go="home" />
    <FaGulp />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
