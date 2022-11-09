import axios from "axios";
import React, { useEffect, useState } from "react";
import useTitle from "../../../UseHook/UseHook";
import "./service.css";
import Single_roduct from "../Products/Single_roduct";

const Service = () => {
  const [servProduct, setServiceProduct] = useState([]);
  useTitle("service");

  //load the all products
  useEffect(() => {
    const url = `https://restaurant-server-azwe004yv-najima1.vercel.app/products`;

    const getFn = async () => {
      const res = await axios.get(url);
      const products = res.data.data;
      setServiceProduct(products);
    };
    getFn();
  }, []);

  return (
    <div className="container py-14">
      <strong className="block text-2xl md:text-4xl text-center text-[#0a3d62]">
        All Fresh Products Daily!
      </strong>

      <div className="service_product mt-8 rounded">
        {servProduct.map((items) => (
          <Single_roduct key={items._id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Service;
