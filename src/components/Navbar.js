import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Text
              </a>
            </li>
          </ul>
          {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light" }`}>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Red mode
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.redMode}
            />
          </div>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light" }`}>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Green mode
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.greenMode}
            />
          </div> */}
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light" }`}>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
               Dark mode
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}