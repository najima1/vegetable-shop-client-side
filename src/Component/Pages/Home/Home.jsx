import React from "react";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import Product from "../Products/Product";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      {/* banner carosuel */}
      <Carousel />

      {/* Three single product */}
      <Product />

      {/* service section */}
      <Services />
    </div>
  );
};

export default Home;
