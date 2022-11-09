import React from "react";
import "./product.css";

const Single_roduct = (items) => {
  const { img, name, price } = items.items;
  return (
    <div className="shadows gap-2 p-8">
      <img src={img} alt="" />
      <div className="flex items-center justify-between">
        <span className="inline-block text-[#2d3436] font-semibold">
          {name}
        </span>
        <strong className="inline-block">{price}</strong>
      </div>
    </div>
  );
};

export default Single_roduct;
