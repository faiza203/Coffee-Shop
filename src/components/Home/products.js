import React from "react";
import {StaticQuery, graphql } from "gatsby";

import Product from "./product";
import Title from "../Global/title";

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 200) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={(data) => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
