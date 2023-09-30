import React, { Component } from "react";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import {
  AiOutlineArrowRight,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
class Footer extends Component {
  render() {
    return (
      <div className=" lg:flex text-white  max-w-[1640px] mx-auto items-center justify-between border-t-2 border-t-white mt-4 sm:flex-column  ">
        {/* contacts */}
        <div>
          <div className="text-center">
            <span className="text-[black] text-xl">copyright@2023</span>
          </div>
        </div>
        {/* Suscription */}
        <div>
          <input
            type="text"
            name=""
            id=""
            className="max-w-[100%] px-4 outline-none py-[0.5rem] bg-[#ddd] text-black m-0"
          />
          <button className="bg-[goldenrod] p-4 py-[0.5rem] m-0 relative right-[0.5rem] border-0 font-light">
            Suscribe
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
