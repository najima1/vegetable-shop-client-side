import React, { useRef } from "react";

const Create_review = (image, id) => {
  const userName = useRef();
  const userEmail = useRef();
  const message = useRef();

  //reviewHandlear
  //===============================
  const reviewHandlear = (e) => {
    e.preventDefault();
    const name = userName.current.value;
    const email = userEmail.current.value;
    const msg = message.current.value;

    if (name && email && msg) {
      const review = { name, email, msg, image, id };
      console.log(review);
    }
  };

  return (
    <div className="my-16">
      <strong className="text-center text-2xl py-4 border-teal-400 border-b-[1px] mx-auto block">
        Your opinion matters!
      </strong>
      <form
        onSubmit={(e) => reviewHandlear(e)}
        className="space-y-4 w-full md:w-1/2 mx-auto py-3"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            ref={userName}
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            ref={userEmail}
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
          />
        </div>

        <div className="space-y-1 text-sm ">
          <label htmlFor="text-area" className="block dark:text-gray-400">
            Enter message
          </label>

          <textarea
            cols="30"
            rows="10"
            type="text"
            name="text-area"
            id="text-area"
            placeholder="message"
            ref={message}
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
          />
        </div>
        <button
          type="submit"
          className="block bg-teal-500 px-5 py-1 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create_review;
