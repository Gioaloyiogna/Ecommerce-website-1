import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Productcomponent(props) {
  return (
    <div className=" pb-4 rounded-xl bg-white scale-95 hover:scale-100 transiton-all hover:shadow-lg">
      <div className="h-[10rem]">
        <img src={props.image} alt="" srcset="" className="w-full  h-full" />
      </div>
      <div className="pl-1">
        <div className="flex justify-between p-1">
          <span>
            <h1 className="font-light text-[1.2rem]">{props.productName}</h1>
          </span>
          <span>
            <h1 className=" text-3xl text-[goldenrod] ">
              {props.price} <span>$</span>{" "}
            </h1>
          </span>
        </div>
        <div>
          <span className="flex items-center p-1 text-[goldenrod] ">
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiOutlineStar size={25} />
          </span>
        </div>
        <div>
          <button className="text-[goldenrod] hover:bg-black hover:text-white">
            View Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productcomponent;
