import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Index1 = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Course for programing"></meta>
      </Helmet>
      <Header></Header>
      <Maincontent a="Home"></Maincontent>
      <Footer></Footer>
    </div>
  );
};

export default Index1;
