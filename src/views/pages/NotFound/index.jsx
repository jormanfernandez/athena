import React from "react";
import { Header } from "views/components/Header";
import { Footer } from "views/components/Footer";
import { textHelper } from "util/textHelper";

import "./_style.scss";

export const NotFound = () => (
  <>
    <Header/>
    <Content/>
    <Footer/>
  </>
);

const Content = () => (
  <main className="wrapper container not-found">
    <div className="center">
      <i className="material-icons dp48">mood_bad</i>
      <p>
        {textHelper("content", "notFound")}
      </p>
    </div>
  </main>
)