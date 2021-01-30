import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import { FaCartArrowDown } from "react-icons/fa";

class NavBar extends Component {
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
              <FaCartArrowDown className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
