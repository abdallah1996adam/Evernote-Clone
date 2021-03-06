import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="green">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          NoteBook
        </Link>
        <ul id="nav-mobile" className="right ">
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
