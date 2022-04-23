import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="mb-5 pl-5 navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="nav-links">
          <div>
            <Link className="navbar-brand" to="/">
              Countries API Application
            </Link>
          </div>
          <div className="web-version">
            <Link className="navbar-brand" to="all-countries-info">
              All Countries Information
            </Link>
          </div>
          <div className="mobile-version">
            <Link className="navbar-brand" to="all-countries-info">
              All Info
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
