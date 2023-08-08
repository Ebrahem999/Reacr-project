import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Index3 = () => {
  return (
    <div>
            <Helmet>
        <title>CSS</title>
        <meta name="description" content="Course for CSS"></meta>
      </Helmet>

      <Header></Header>
      <Maincontent a="CSS"></Maincontent>

      <Footer></Footer>
    </div>
  );
};

export default Index3;
