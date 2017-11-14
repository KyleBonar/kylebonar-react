import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div id="navBar" className="content-container">
        <NavLink
          exact
          className="home-link droid-bold"
          activeClassName="active"
          to="/"
        >
          Kyle Bonar
        </NavLink>

        <div id="nav">
          <ul>
            <li>
              <NavLink
                className="menu-link"
                activeClassName="active"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <a className="menu-link" target="_blank" href="/resume">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

module.exports = Nav;
