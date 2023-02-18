
import React, { Component } from "react";
import { Carouseldata } from "./Carouseldata";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="mt-8 mb-8 max-w-[1200px] p-[2rem] mx-auto bg-black ">
        <h1 className="text-center text-[goldenrod] text-5xl p-4">
          Featured Products
        </h1>
        <div className="">
          <Slider {...settings}>
            {Carouseldata.map((slide, index) => {
              return (
                <div className="block w-full h-80  ">
                  <img
                    src={slide.image}
                    alt="This is a carousel slide"
                    key={index}
                    className="block w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
