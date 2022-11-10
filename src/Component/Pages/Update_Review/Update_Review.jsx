import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update_Review = () => {
  const { name, msg, image, _id } = useLoaderData();
  const navigate = useNavigate();
  const message = useRef();
  const imagLink = useRef();
  const userName = useRef();

  const updateReviewHandler = (e) => {
    e.preventDefault();
    let r_name = userName.current.value;
    let r_image = imagLink.current.value;
    let r_message = message.current.value;

    const newReview = { r_image, r_name, r_message };

    // send update data
    const url = `https://restaurant-server-9fmnpaujx-najima1.vercel.app/review/update/${_id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    }).then((e) => {
      toast.success("review updated");
      navigate("/reviews");
    });
  };

  return (
    <div className="container my-28 max-w-xl">
      <h1 className="text-center py-5 text-2xl">Update Review </h1>
      <form
        onSubmit={(e) => updateReviewHandler(e)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="image" className="block dark:text-gray-400">
            Enter image link
          </label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="image"
            ref={imagLink}
            required
            defaultValue={image}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="userName" className="block dark:text-gray-400">
            Enter name
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="name"
            ref={userName}
            required
            defaultValue={name}
            className="w-full outline-none px-4 py-3 rounded-md dark:border-gray-700 bg-gray-200 focus:dark:border-violet-400"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="message" className="block dark:text-gray-400">
            Message
          </label>

          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="message"
            ref={message}
            required
            defaultValue={msg}
            cols="30"
            rows="10"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
          />
        </div>

        <button
          type="submit"
          className="block mx-auto bg-teal-500 px-10 py-1 rounded text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update_Review;
