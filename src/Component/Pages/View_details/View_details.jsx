import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./views.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// view image component
//=============================================
const View_details = () => {
  const [product, setProduct] = useState([]);
  const data = useLoaderData();
  const {
    name,
    img,
    price,
    details: { charge, woner, free_service, payment, product_id, size, desc },
  } = data.data;
  console.log(data.data);

  return (
    <div className="container my-24">
      <div className="detailsProduct">
        {/* image */}
        <div className="">
          {/* <img className="border shadow max-w-[80%]" src={img} alt="" /> */}
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="border shadow max-w-[80%] mx-auto" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
        </div>

        {/* product info */}
        <div className="">
          <strong className="block text-2xl mb-2">{name}</strong>
          <h1 className="py-2">
            <strong className="text-2xl inline-block">{price}</strong> & Free
            Shipping
          </h1>
          <hr />
          <div className="py-3">
            <h1 className="block py-3">{charge}</h1>
            <strong className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-teal-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{woner}</span>
            </strong>
            <strong className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-teal-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{free_service}</span>
            </strong>
            <strong className="flex gap-2 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-teal-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{payment}</span>
            </strong>
          </div>
          <hr />
          <strong className="text-2xl block mt-5"> {product_id}</strong>
          <h1 className=" block">Size : {size}</h1>
          <p className="py-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default View_details;
