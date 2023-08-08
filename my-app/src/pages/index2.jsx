import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Index2 = () => {
  return (
    <div>
      <Helmet>
        <title>HTML</title>
        <meta name="description" content="Course for HTML"></meta>
      </Helmet>

      <Header></Header>

      <Maincontent a="Html"></Maincontent>
      <Footer></Footer>
    </div>
  );
};

export default Index2;
