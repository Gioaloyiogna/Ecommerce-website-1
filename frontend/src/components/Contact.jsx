import React, { Component } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

class Contact extends Component {
  render() {
    return (
      <div className="mx-auto p-4 max-w-[1640px]">
        <h1 className="font-bold text-4xl text-center text-[goldenrod] ">
          Get in touch with us
        </h1>
        <div className="text-center text-white p-2 max-w-[700px] mx-auto font-light text-[1.2rem] fonts">
          <span >Fore more information do not hesitate to call us Fore more information do not hesitate to call us</span>
        </div>
        <div className="grid lg:grid-cols-4 gap-2">
            <div className="flex-column p-4 bg-white">
                <div className="">
                    <img src="/images/City2.png" alt="" srcset="" className="max-h-[15rem] object-fit" />
                </div>
               
               <div className="border-b-2 border-b-black-500 "> <h2 className="font-bold p-2">Accra,Ghana</h2></div>
                <div className="font-light p-3 fonts">
                    <span><a href="www.google.com">+23374911985</a></span><br />
                    <span><a href="www.google.com">Acrra@gmail.com</a></span>
                </div>
                <div>
                    <button className="w-full bg-black text-white flex justify-center items-center"><span className="pr-1">Contact</span><AiOutlineArrowRight/> </button>
                </div>
            </div>
            <div className="flex-column p-4 bg-white">
                <div className="">
                    <img src="/images/City2.png" alt="" srcset="" className="max-h-[15rem] object-fit" />
                </div>
               
               <div className="border-b-2 border-b-black-500 "> <h2 className="font-bold p-2">Accra,Ghana</h2></div>
                <div className="font-light p-3 fonts">
                    <span><a href="www.google.com">+23374911985</a></span><br />
                    <span><a href="www.google.com">Acrra@gmail.com</a></span>
                </div>
                <div>
                    <button className="w-full bg-black text-white flex justify-center items-center"><span className="pr-1">Contact</span><AiOutlineArrowRight/> </button>
                </div>
            </div>
            <div className="flex-column p-4 bg-white">
                <div className="">
                    <img src="/images/City2.png" alt="" srcset="" className="max-h-[15rem] object-fit" />
                </div>
               
               <div className="border-b-2 border-b-black-500 "> <h2 className="font-bold p-2">Accra,Ghana</h2></div>
                <div className="font-light p-3 fonts">
                    <span><a href="www.google.com">+23374911985</a></span><br />
                    <span><a href="www.google.com">Acrra@gmail.com</a></span>
                </div>
                <div>
                    <button className="w-full bg-black text-white flex justify-center items-center"><span className="pr-1">Contact</span><AiOutlineArrowRight/> </button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;
