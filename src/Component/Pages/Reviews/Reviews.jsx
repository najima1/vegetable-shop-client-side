import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../UseHook/UseHook";
import { loading, AuthContext } from "../../AuthContext/ContextProvider";
import logo from "../../image/05.jpg";
import "./review.css";

const Reviews = () => {
  const data = useLoaderData();
  const findData = data.data;

  useTitle("review");

  console.log(findData);

  return (
    <div className="container my-24">
      <strong className="text-4xl py-5 block">User review</strong>
      <ul>
        {findData?.map((items, indx) => (
          <li
            key={indx}
            className="shadow_review flex items-center justify-around rounded w-full  my-4 px-3 md:px-0"
          >
            <div className="md:flex items-center justify-evenly">
              <img className="w-[100px]" src={items.image} alt="" />
              <span>{items.msg}</span>
            </div>
            <div className="flex justify-evenly my-4 md:my-0">
              <span>{items.email}</span>
              <button className="bg-orange-500 text-white py-1 px-5 rounded">
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
