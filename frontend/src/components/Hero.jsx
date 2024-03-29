import React, { Component } from "react";
import { Carouseldata } from "./Carouseldata";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      let slide =
        this.state.currentSlide === Carouseldata.length - 1
          ? 0
          : this.state.currentSlide + 1;
      this.setState({
        currentSlide: slide,
      });
    }, 3000);
  }
  slideLeft = () => {
    let slide =
      this.state.currentSlide === 0
        ? Carouseldata.length - 1
        : this.state.currentSlide - 1;
    this.setState({
      currentSlide: slide,
      paused: false,
    });
  };
  slideRight = () => {
    let slide =
      this.state.currentSlide === Carouseldata.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({
      currentSlide: slide,
    });
  };
  render() {
    return (
      <div className="max-w-[100%] h-[30rem] p-4 mx-auto overflow-hidden mt-5 ">
        {Carouseldata.map((slide, index) => {
          return (
            <div
              className={
                index === this.state.currentSlide
                  ? "relative h-[30rem] max-w-[100%] bg-black mx-5"
                  : "hidden"
              }
            >
              <div className="absolute top-0 flex left-0 right-0 bottom-0 justify-center items-center ">
                <div className="">
                  <h1 className=" lg:text-4xl md:text-3xl text-white p-2 sm:text-2xl ">
                    {slide.text}
                  </h1>

                  <div className="text-center">
                    <button className=" lg:text-2xl md:text-2xl border-0 bg-[goldenrod] text-white font-light px-[3rem] py-1 sm:text-2xl ">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <img
                src={slide.image}
                alt=""
                key={index}
                className={" block w-full object-cover h-full "}
              />
              <div className="absolute top-[50%] bottom-[50%] left-0 right-0 flex justify-between">
                <AiOutlineLeft
                  size={40}
                  className="bg-black cursor-pointer relative p-2 text-white"
                  onClick={this.slideLeft}
                />

                <AiOutlineRight
                  size={40}
                  className="text-white  bg-black cursor-pointer  relative p-2"
                  onClick={this.slideRight}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Hero;
