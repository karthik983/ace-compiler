import React from "react";
import Img from "../img.png";
function Newnavbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light  mb-3">
      <div className="pl-3">
        <a
          href="http://code.in"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-brand"
        >
          <img src={Img} style={{ height: "50%", width: "50%" }} alt="/" />
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item  ">
            <a
              href="https://twitter.com/codedotin"
              target="_blank"
              className="nav-link"
              rel="noopener noreferrer"
            >
              <span style={{ color: "#33A950" }}>
                <i className="fab fa-twitter fa-1x" />
              </span>
            </a>
          </li>
          <li className="nav-item  ">
            <a
              href="https://github.com/www-code-in"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <span style={{ color: "#33A950" }}>
                <i className="fab fa-github fa-1x" />
              </span>
            </a>
          </li>
          <li className="nav-item ">
            <a
              href="#explore-head-section"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <span style={{ color: "#33A950" }}>
                <i className="fab fa-facebook-square fa-1x" />
              </span>
            </a>
          </li>
          <li className="nav-item  ">
            <a
              href="https://www.linkedin.com/company/code-in"
              className="nav-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span style={{ color: "#33A950" }}>
                <i className="fab fa-linkedin fa-1x" />
              </span>
            </a>
          </li>
          <li className="nav-item ">
            <a
              href="https://www.instagram.com/codeindia_/"
              className="nav-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span style={{ color: "#33A950" }}>
                <i className="fab fa-instagram fa-1x" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Newnavbar;
