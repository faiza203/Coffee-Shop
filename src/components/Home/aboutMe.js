import React from "react";
import { Link } from "gatsby";
import Title from "../Global/title";

export default function aboutMe() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <Title title="Me" />
            <h2 className="text-muted mt-3">My Name is Faiza Fiaz</h2>
            <p className="lead text-muted mb-5">
              I am 13<sup>th</sup>year old Pakistani Developer
            </p>
            <Link to="/">
              <button className="btn text-uppercase btn-yellow">
                Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
