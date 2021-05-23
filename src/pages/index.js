import React from "react";
import { FaGulp } from "react-icons/fa";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {BackgroundSection} from "../components/Global";
import Info from "../components/Home/info";
import Menu from "../components/Home/menu";
import Products from "../components/Home/products";
import Contact from "../components/Home/Contact";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Regular Joe's"
      styleClass="default-background"
    />
    <Info go="about" />
    <Menu items={data.menu} />
    <Products />
    <FaGulp className="cart-icon" />
    <Contact />
  </Layout>
);


export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
