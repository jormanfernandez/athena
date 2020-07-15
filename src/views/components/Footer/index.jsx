import React from "react";
import { textHelper } from "util/textHelper";

export const Footer = () => (
  <footer className="page-footer">
    <div className="footer-copyright">
      <div className="container">
      <p className="center">{textHelper("footer", "copyright")}</p>
      </div>
    </div>
  </footer>
);