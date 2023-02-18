import React, { Component } from "react";
import { MdAttachMoney } from "react-icons/md";
import { BsBicycle } from "react-icons/bs";
class service extends Component {
  render() {
    return (
      <div className="max-w-[1640px] flex  p-4 mx-auto mt-4">
        <div className="m-2 flex items-center justify-around  text-white bg-[goldenrod]  ">
          <BsBicycle size={50} />
          <h1 className="px-2 text-black ">
            <span  className="sm:text-2xl md:text-2xl text-white">Faster delivery</span>
          </h1>
        </div>

        <div className="m-2 flex items-center justify-around  text-white bg-[goldenrod]  ">
          <MdAttachMoney size={50} />
          <h1 className="px-2 text-black  ">
            <span className="sm:text-2xl md:text-2xl text-white">Affordable price</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default service;
