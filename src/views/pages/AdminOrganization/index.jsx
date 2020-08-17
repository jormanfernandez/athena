import React from "react";
import { Header } from "views/components/Header";
import { Footer } from "views/components/Footer";
import { textHelper } from "util/textHelper";
import { Locals } from "views/components/Locals";
import { CompanyTypes } from "views/components/CompanyTypes";
import { PaymentMethods } from "views/components/PaymentMethods";
import { Logos } from "views/components/Logos";

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
  return (
    <main className="wrapper container admin-dashboard">
      {textHelper("content", "adminOrganization", "title")}
      <hr/>
      <Locals/>
      <hr/>
      <CompanyTypes/>
      <hr/>
      <PaymentMethods/>
      <hr/>
      <Logos/>
    </main>
  )
}
