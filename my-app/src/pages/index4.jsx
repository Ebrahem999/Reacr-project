import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Index4 = () => {
  return (
    <div>
      <Helmet>
        <title>JS</title>
        <meta name="description" content="Course for JS"></meta>
      </Helmet>

      <Header></Header>
      <Maincontent a="JS"></Maincontent>

      <Footer></Footer>
    </div>
  );
};

export default Index4;
