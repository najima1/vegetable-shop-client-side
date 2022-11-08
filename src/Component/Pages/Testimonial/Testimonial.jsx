import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="container py-11">
      <strong className="text-center text-2xl border-b-[2px] border-teal-400 pb-3 font-semibold block">
        Trending Blog Post
      </strong>
      <div className="img_wraper py-3">
        <div>
          <div className="bg_image p-10 md:p-16 py-10">
            <small className="block text-xl">wide Range</small>
            <h1 className="text-2xl font-semibold">
              SHOP NOW Healthy <br /> Green Vegetables
            </h1>
            <p className="block w-40 bg-[#22a6b3] mt-3 rounded-sm py-1 text-center text-white">
              shop now
            </p>
          </div>
        </div>
        <div>
          <div className="bg_image2 p-16 md:p-16 py-4">
            <small className="block text-xl">wide Range</small>
            <h1 className="text-2xl font-semibold">
              SHOP NOW Best Fruit
              <br /> Juice Recipes
            </h1>
            <p className="block w-40 bg-[#22a6b3] mt-3 rounded-sm py-1 text-center text-white">
              shop now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
