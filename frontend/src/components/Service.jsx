import React, { Component } from "react";
import { MdAttachMoney } from "react-icons/md";
import { BsBicycle } from "react-icons/bs";
class service extends Component {
  render() {
    return (
      <div className="max-w-[100%] flex  pt-4 pb-4 pl-4 mx-5  mb-[6rem] bg-[#EFEDE5] ">
        <div className="flex items-center justify-around  text-[goldenrod] bg-white mr-2">
          <BsBicycle size={50} className="pl-2" />
          <h1 className="px-2 text-black ">
            <span className="sm:text-2xl md:text-2xl text-[goldenrod]">
              Faster delivery
            </span>
          </h1>
        </div>

        <div className="flex items-center justify-around  text-[goldenrod] bg-white mr-2 ">
          <MdAttachMoney size={50} className="pl-2" />
          <h1 className="px-2 text-black  ">
            <span className="sm:text-2xl md:text-2xl text-[goldenrod]">
              Affordable price
            </span>
          </h1>
        </div>
      </div>
    );
  }
}

export default service;
