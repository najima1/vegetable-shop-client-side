import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import bannerOne from "../../image/banner1.png";
import bannerTwo from "../../image/banner2.png";

class DemoCarousel extends Component {
  render() {
    return (
      <div className="py-1">
        <Carousel>
          <div className="">
            <img src={bannerOne} />
          </div>
          <div className="">
            <img src={bannerTwo} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
