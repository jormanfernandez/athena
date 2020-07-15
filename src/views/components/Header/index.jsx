import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "routes/pages";
import { textHelper } from "util/textHelper";

export const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <Link to={PAGES.login.path} className="brand-logo right">{textHelper("header", "logo", "athena")}</Link>
        <Link to={PAGES.login.path} className="brand-logo left">{textHelper("header", "logo", "partner")}</Link>
      </div>
    </nav>
  </header>
)