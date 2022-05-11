import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <img src={require("./wp1.png")} style={{ width: "60px" }}></img>
          <a
            className={`navbar-brand text-${
              props.mode === "success" ? "white" : "light"
            }`}
            href="/"
          >
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a
                  className={`nav-link active text-${
                    props.mode === "success" ? "white" : "light"
                  }`}
                  aria-current="page"
                  href="/"
                >
                  {props.home}
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a
                  className={`nav-link active text-${
                    props.mode === "success" ? "white" : "light"
                  }`}
                  href="/"
                >
                  {props.about}
                </a>
              </li> */}
            </ul>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "success" ? "white" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
}; 
export default Navbar;
