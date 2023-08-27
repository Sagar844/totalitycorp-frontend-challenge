import React from "react";

import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { withCart } from "../withProvider";

function Navbar({totalcount}) {
  return (
    <div className="bg-white py-3 flex justify-between items-center shadow-md  ">
      <div className="">
        <Link to="/">
        <img
          className="ml-5  w-12 max-w-sm"
          src="/src/assets/print-1-1.svg"
        />
        </Link>
       
      </div>
      
      <div className=" flex   ">
        <Link to="/products/cart">
        <BsCartCheck className="text-orange-500 text-xl hover:text-orange-500" />

        </Link>
        <span className="bg-orange-500 text-white rounded-full h-6 w-6 text-center  mr-5 ">
          {totalcount}
        </span>
      </div>
    </div>
  );
}

export default withCart(Navbar);
