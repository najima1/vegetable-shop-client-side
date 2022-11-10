import React, { useRef } from "react";
import useTitle from "../../../UseHook/UseHook";

const Add_service = () => {
  useTitle("review");
  const productName = useRef();
  const productID = useRef();
  const imagLink = useRef();
  const productPrice = useRef();

  const addServiceHandelar = (e) => {
    e.preventDefault();

    const validName = productName.current.value;
    const validID = productID.current.value;
    const validImg = imagLink.current.value;
    const validPrice = productPrice.current.value;

    console.log(validName, validID, validImg, validPrice);
  };

  return (
    <div className="container">
      <div className="container py-16 mx-auto">
        <div className="w-full max-w-2xl p-8 space-y-3 rounded-xl mx-auto md:shadow-lg  dark:text-gray-900">
          <h1 className="text-2xl font-bold text-center">Create product</h1>
          <form
            onSubmit={(e) => addServiceHandelar(e)}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="productName" className="block dark:text-gray-400">
                Product name
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                placeholder="product"
                ref={productName}
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
              />
            </div>
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
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="productID" className="block dark:text-gray-400">
                Enter product ID
              </label>
              <input
                type="productID"
                name="productID"
                id="productID"
                placeholder="product id"
                ref={productID}
                required
                className="w-full outline-none px-4 py-3 rounded-md dark:border-gray-700 bg-gray-200 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="productPrice"
                className="block dark:text-gray-400"
              >
                Enter product price
              </label>
              <input
                type="productPrice"
                name="productPrice"
                id="productPrice"
                placeholder="product price"
                ref={productPrice}
                required
                className="w-full outline-none px-4 py-3 rounded-md dark:border-gray-700 bg-gray-200 focus:dark:border-violet-400"
              />
            </div>
            <button
              type="submit"
              className="block mx-auto bg-teal-500 px-10 py-1 rounded text-white"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_service;
