import React from "react";
import Img from "../img.png";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm d-flex justify-content-between  "
      id="main-nav"
    >
      <div className="pl-3">
        <a href="index.html" className="navbar-brand">
          <img src={Img} style={{ height: "75%", width: "75%" }} alt="/" />
        </a>
      </div>
      <div>
        <ul className="navbar-nav  ">
          <li className="nav-item px-1 ">
            <a href="#home" className="nav-link">
              <span style={{ color: "royalblue" }}>
                <i className="fab fa-twitter fa-2x"></i>
              </span>
            </a>
          </li>
          <li className="nav-item px-1 ">
            <a href="#home" className="nav-link">
              <span style={{ color: "royalblue" }}>
                <i className="fab fa-github fa-2x"></i>
              </span>
            </a>
          </li>
          <li className="nav-item px-1">
            <a href="#explore-head-section" className="nav-link">
              <span style={{ color: "royalblue" }}>
                <i className="fab fa-facebook-square fa-2x"></i>
              </span>
            </a>
          </li>
          <li className="nav-item px-1 ">
            <a href="#create-head-section" className="nav-link">
              <span style={{ color: "royalblue" }}>
                <i className="fab fa-linkedin fa-2x"></i>
              </span>
            </a>
          </li>
          <li className="nav-item px-1">
            <a href="#share-head-section" className="nav-link">
              <span style={{ color: "royalblue" }}>
                <i className="fab fa-instagram fa-2x"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
