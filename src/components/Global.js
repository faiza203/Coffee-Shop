import React , {Component}from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../images/logo.svg";

export function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white  text-uppercase  text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
};


export class NavBar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      { id: 1, path: "/", text: "home" },
      { id: 2, path: "/about", text: "about" },
    ],
  };
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        });
  };
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-sm bg-light show">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo"></img>{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item ms-sm-5">
              <FaCartArrowDown className="cart-icon snipcart-checkout" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export  function Footer() {
    return (
      <footer className="footer py-3">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
              <h3>
                all rights reserved &copy; {new Date().getFullYear().toString()}
              </h3>
            </div>
          </div>
        </div>
      </footer>
    );
  }

export  function title({ title }) {
  return (
    <div className="text-uppercase text-center">
      <h1>{title}</h1>
    </div>
  );
}
