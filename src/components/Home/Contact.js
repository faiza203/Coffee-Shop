import React from "react";
import {Title} from "../Global";

export default function Contact() {
  return (
    <section className="contact py-3">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/f/mdopbqwz" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control mb-2 mt-2"
                name="name"
                id="name"
                placeholder="Your's Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control  mb-2 mt-2"
                name="email"
                id="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control mt-2"
                rows="5"
                placeholder="Your description here....."
              />
            </div>
            <button
              type="submit"
              className="btn btn-yellow form-control btn-block  text-capitalize mt-4"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
