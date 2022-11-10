import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../UseHook/UseHook";
import { AuthContext } from "../../AuthContext/ContextProvider";
import "./review.css";

const Reviews = () => {
  const data = useLoaderData();
  const { loading } = useContext(AuthContext);
  const findData = data.data;
  const [reviewData, setReviewData] = useState(findData);

  useTitle("review");

  //deleteReview
  const deleteReview = (id) => {
    const url = `https://restaurant-server-isb2q58kz-najima1.vercel.app/product/deleted/${id}`;

    const aggree = window.confirm("Are sure to delete review");

    if (aggree) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingReview = reviewData.filter((data) => data._id !== id);
          setReviewData(remainingReview);
          toast.success("User review deleted successfull");
        })
        .catch((e) => toast.error(e.message));
    }
  };

  // update review
  const updateReview = (id) => {};

  return (
    <div className="container my-24">
      <strong className="text-4xl py-5 block">
        User review {reviewData.length}
      </strong>

      <ul>
        {Number(reviewData.length) <= 0 ? (
          <h1 className="capitalize text-2xl block text-center">
            No reviews were added..
          </h1>
        ) : (
          <div>
            {reviewData?.map((items, indx) => (
              <li
                key={indx}
                className="shadow_review flex items-center justify-around rounded w-full  my-4 px-3 md:px-0"
              >
                <div className="md:flex items-center justify-evenly">
                  <img
                    className="w-[200px] md:w-[100px] lg:mx-0 mx-auto"
                    src={items.image}
                    alt=""
                  />
                  <span className="block">{items.msg}</span>
                </div>
                <div className="flex justify-evenly my-4 md:my-0">
                  <span className="block md:inline-block">{items.name}</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => deleteReview(items._id)}
                      className="bg-orange-600 text-white py-1 px-5 rounded block md:inline-block"
                    >
                      delete
                    </button>
                    <Link to={`/review/update/${items._id}`}>
                      <button
                        type="button"
                        className="bg-teal-500 text-white py-1 px-5 rounded block md:inline-block"
                      >
                        update
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
