import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Service from "./Service";
import Carousel from "./Carousel";
import Products from "./Products";
import Location from "./Location";
import Contact from "./Contact";
import Footer from "./Footer";
function HomeScreen(props) {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Service />
      <Carousel />
      <Products />
      {/* <Location /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default HomeScreen;
