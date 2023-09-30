import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Location from "./components/Location";
import Cart from "./components/Cart";
import HomeScreen from "./components/HomeScreen";
import Contact from "./components/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/products/:id" element={<Product />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/cart/:id?" element={<Cart />}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
