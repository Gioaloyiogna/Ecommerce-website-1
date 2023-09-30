import React, { Component } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
    };
  }
  componentDidMount() {
    // Hiding and showing navBar on scroll.
    window.addEventListener("scroll", () => {
      const navBar = document.getElementById("navbar").scrollHeight;
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navBar) {
        if (!this.state.nav) {
          this.setState({ nav: true });
        }
      } else {
        this.setState({ nav: false });
      }
    });
  }

  render() {
    return (
      <>
        <nav
          className={
            this.state.nav
              ? "w-[100%] h-[5rem] flex fixed justify-around items-center px-4 bg-white z-[999] transition duration-1000 ease-in-out ease-linear bg-white rounded-lg shadow-lg"
              : " w-[100%]  h-[5rem] flex  justify-around items-center px-4 bg-white transition ease-linear  duration-1000 ease-in-out bg-white rounded-sm shadow-sm bo "
          }
        >
          {/* logo section */}
          <div className="w-[5rem] flex items-center h-[5rem]">
            <div className="lg:hidden sm:block md:block mt-3 ">
              <AiOutlineMenu size={30} />
            </div>
            <img
              className="w-full h-full hidden  lg:block "
              src="data:image/jpeg;base64,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"
              alt=""
              srcset=""
            />
          </div>
          {/* Navbar links */}
          <div className="hidden lg:block md:block">
            <ul className="flex justify-between">
              <li className="px-4 cursor-pointer text-2xl text-[goldenrod]  ">
                <a href="www.google.com">Products</a>
              </li>
              <li className="px-4 cursor-pointer text-2xl text-[goldenrod] ">
                <a href="/location">Location</a>
              </li>
              <li className="px-4 cursor-pointer text-2xl text-[goldenrod]">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* Search box */}
          <div className="flex items-center rounded-full bg-gray-200 w-[200px] sm:w-[400px] lg:[500px]">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className="w-full bg-transparent focus:outline-none p-2"
            />
          </div>
          {/* Shopping cart */}
          <div>
            <button className="bg-black  text-white flex items-center hidden md:flex rounded-full py-2">
              <BsFillCartFill />
              <a href="/cart"> Cart</a>
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
