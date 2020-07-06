import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "routes/pages";

export const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <Link to={PAGES.login.path} className="brand-logo right">Athena - Logo</Link>
        <Link to={PAGES.login.path} className="brand-logo left">Partner - Logo</Link>
      </div>
    </nav>
  </header>
)