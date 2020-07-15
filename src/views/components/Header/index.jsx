import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "routes/pages";
import { textHelper } from "util/textHelper";
import { LanguageSelector } from "views/components/LanguageSelector";

import "./_header.scss";

export const Header = () => (
  <header className="header">
    <nav>
      <div className="nav-wrapper">
        <LanguageSelector/>
        <Link to={PAGES.login.path} className="brand-logo center">{textHelper("header", "logo", "partner")}</Link>
        <Link to={PAGES.login.path} className="brand-logo right">{textHelper("header", "logo", "athena")}</Link>
      </div>
    </nav>
  </header>
)