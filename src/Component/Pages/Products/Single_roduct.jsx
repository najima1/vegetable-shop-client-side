import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const Single_roduct = (items) => {
  const { img, name, price, _id } = items.items;

  return (
    <div>
      <div className="shadows gap-2 p-8 bg-white rounded">
        <img src={img} alt="" />
        <div className="flex items-center justify-between">
          <span className="inline-block text-[#2d3436] font-semibold">
            {name}
          </span>
          <strong className="inline-block">{price}</strong>
        </div>

        {/* button details */}
        <div>
          <Link to={`/view/${_id}`}>
            <button className="w-full block py-1 rounded mt-2 md:mt-4 bg-[#30336b] text-white hover:bg-[#22a6b3] transition-all">
              Wiew details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Single_roduct;
