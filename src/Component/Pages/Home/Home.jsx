import React from "react";
import useTitle from "../../../UseHook/UseHook";
import Carousel from "../Carousel/Carousel";
import Product from "../Products/Product";
import Testimonial from "../Testimonial/Testimonial";
import Services from "./Services";

const Home = () => {
  useTitle("home");
  return (
    <div>
      {/* banner carosuel */}
      <Carousel />

      {/* Three single product */}
      <Product />

      {/* service section */}
      <Services />

      {/* testimonial section */}
      <Testimonial />
    </div>
  );
};

export default Home;
