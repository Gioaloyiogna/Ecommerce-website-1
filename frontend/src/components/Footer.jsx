import React, { Component } from "react";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import {AiOutlineArrowRight, AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
class Footer extends Component {
  render() {
    return (
      <div className=" lg:flex text-white  max-w-[1640px] mx-auto items-center justify-between border-t-2 border-t-white mt-4 sm:flex-column  ">
        {/* About shop */}
        <div >
          <div className="flex flex-wrap p-2 max-w-[30rem] h-auto">
            <span className="fonts font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dicta impedit sequi labore quia dolo
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dicta impedit sequi labore quia dolor
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span className="p-2">
              <BsFacebook size={20} />
            </span>
            <span className="p-2">
              <BsInstagram size={20} />
            </span>
            <span className="p-2">
              <BsWhatsapp size={20} />
            </span>
          </div>
        </div>
        {/* useful links */}
        <div className="sm:text-center">
          <h2 className="text-[goldenrod] text-2xl">Links</h2>
          <div>
            <ul>
              <li className="flex items-center fonts font-light"><AiOutlineArrowRight className="text-[goldenrod] "/> <a href="www.google.com">Products</a></li>
              <li className="flex items-center fonts font-light"><AiOutlineArrowRight className="text-[goldenrod] "/><a href="www.google.com">Location</a> </li>
            
            </ul>
          </div>
        </div>
        {/* contacts */}
        <div>
          <h2 className="text-[goldenrod] text-2xl">Contact</h2>
          <div>
            <span className="flex items-center fonts"><AiOutlinePhone  className="text-[goldenrod] "/> <a href="www.google.com">+23374911985</a></span>
            <span className="flex items-center fonts"> <AiOutlineMail  className="text-[goldenrod] "/> <a href="www.google.com">gio.aloyiogna@gmail.com</a></span>
          </div>
        </div>
        {/* Suscription */}
        <div >
          <input type="text" name="" id=""  className="max-w-[100%] px-4 outline-none py-[0.5rem] bg-[#ddd] text-black m-0"/>
          <button className="bg-[goldenrod] p-4 py-[0.5rem] m-0 relative right-[0.5rem] border-0 font-light">Suscribe</button>
        </div>
      </div>
    );
  }
}

export default Footer;
