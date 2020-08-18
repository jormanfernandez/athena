import React, { useState } from "react";
import { Header } from "views/components/Header";
import { Footer } from "views/components/Footer";
import { textHelper } from "util/textHelper";
import { Locals } from "views/components/Locals";
import { CompanyTypes } from "views/components/CompanyTypes";
import { PaymentMethods } from "views/components/PaymentMethods";
import { Logos } from "views/components/Logos";
import { classNames } from "util/views/classNames";

import "./_style.scss";

export const AdminOrganization = () => {
  return (
   <>
    <Header/>
    <AdminSummary/>
    <Footer/>
   </>
  );
}

const AdminSummary = () => {
  const [displays, setDisplays] = useState({
    paymentMethods: true,
    locals: false,
    companyTypes: false,
    logos: false,
  });
  const toggle = field => {
    const views = {...displays}
    views[field] = !views[field];
    setDisplays(views);
  }
  return (
    <main className="wrapper container admin-dashboard">
      {textHelper("content", "adminOrganization", "title")}
      <hr/>
      <p>{textHelper("content", "paymentMethods", "title")}</p>
      <button className="btn waves-effect waves-light" onClick={() => toggle("paymentMethods")}>
        {textHelper("content", "button", !displays.paymentMethods ? "show" : "hide")}
      </button>
      <div className={classNames({
        "hide": !displays.paymentMethods
      })}>
        <PaymentMethods/>
      </div>
      <hr/>
      <p>{textHelper("content", "locals", "title")}</p>
      <button className="btn waves-effect waves-light" onClick={() => toggle("locals")}>
        {textHelper("content", "button", !displays.locals ? "show" : "hide")}
      </button>
      <div className={classNames({
        "hide": !displays.locals
      })}>
        <Locals/>
      </div>
      <hr/>
      <p>{textHelper("content", "companyTypes", "title")}</p>
      <button className="btn waves-effect waves-light" onClick={() => toggle("companyTypes")}>
        {textHelper("content", "button", !displays.companyTypes ? "show" : "hide")}
      </button>
      <div className={classNames({
        "hide": !displays.companyTypes
      })}>
        <CompanyTypes/>
      </div>
      <hr/>
      <p>{textHelper("content", "logos", "title")}</p>
      <button className="btn waves-effect waves-light" onClick={() => toggle("logos")}>
        {textHelper("content", "button", !displays.logos ? "show" : "hide")}
      </button>
      <div className={classNames({
        "hide": !displays.logos
      })}>
        <Logos/>
      </div>
    </main>
  )
}
