import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./views.css";
import defaultLogo from "../../image/05.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Create_review from "./Create_review";

// view image component
//=============================================
const View_details = () => {
  const [product, setProduct] = useState([]);
  const data = useLoaderData();
  const {
    name,
    img,
    price,
    _id,
    details: { charge, woner, free_service, payment, product_id, size, desc },
  } = data.data;

  return (
    <div className="container my-24">
      <div className="detailsProduct">
        {/* image */}
        <div className="">
          {/* <img className="border shadow maxW-[80%]" src={img} alt="" /> */}
          <PhotoProvider>
            <PhotoView src={img}>
              {img ? (
                <img
                  className="border shadow maxW-[80%] mx-auto"
                  src={img}
                  alt=""
                />
              ) : (
                <img src={defaultLogo} alt="" />
              )}
            </PhotoView>
          </PhotoProvider>
        </div>

        {/* product info */}
        <div className="">
          <strong className="block text-2xl mb-2">{name}</strong>
          <h1 className="py-2">
            <strong className="text-2xl inline-block">
              {price ? price : `$00.00`}
            </strong>{" "}
            & Free Shipping
          </h1>
          <hr />
          <div className="py-3">
            <h1 className="block py-3">
              {charge ? charge : "Free shipping on orders over $50!"}
            </h1>
            <strong className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{woner ? woner : "Satisfaction Guaranteed"}</span>
            </strong>
            <strong className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{free_service ? free_service : "No Hassle Refunds"}</span>
            </strong>
            <strong className="flex gap-2 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{payment ? payment : "Secure Payments"}</span>
            </strong>
          </div>
          <hr />
          <strong className="text-2xl block mt-5"> {product_id}</strong>
          <h1 className=" block">Size : {size ? size : ""}</h1>
          <p className="py-2">{desc}</p>
        </div>
      </div>

      {/* create review */}
      <Create_review image={img} id={_id} />
    </div>
  );
};

export default View_details;
