import React from 'react';
import {NavLink, Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <nav>
        <div className="nav-wrapper purple lighten-2">
        <NavLink to="/" className="brand-logo">TO DO APP</NavLink>
        <Link to="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
        </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </ul>
    </div>
  );
}

export default Navbar;
