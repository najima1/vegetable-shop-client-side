import axios from "axios";
import React, { useEffect, useState } from "react";
import Single_roduct from "./Single_roduct";
import "./product.css";
import { Link } from "react-router-dom";
import logo from "../../image/icons8-iphone-spinner.gif";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = `https://restaurant-server-azwe004yv-najima1.vercel.app/products`;
    const axiosFn = async () => {
      const res = await axios.get(url);
      const result = res.data.data;
      const limit = result.slice(0, 3);
      setProduct(limit);
    };
    axiosFn();
  }, []);

  return (
    <div className="bg-[#ffcccca0]">
      <div className="container py-10 ">
        <h1 className="md:text-2xl lg:text-3xl border-teal-400 border-b-[1px] text-center py-1 font-semibold">
          All Fresh Products Daily!
        </h1>

        <div>
          {/* load data with spinner */}
          <div>
            {product.length <= 0 ? (
              <img className="mx-auto" src={logo} alt="" />
            ) : (
              <div className="signle_product mt-8 rounded">
                {product.map((items) => (
                  <Single_roduct key={items._id} items={items} />
                ))}
              </div>
            )}
          </div>
          {/* show all procuct after click the button */}
          <div>
            <Link to="/service">
              <button className="block text-center w-40 py-2 px-7 bg-[#17c0eb] mx-auto mt-10 text-white hover:bg-teal-400 transition-all rounded">
                Show all
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
