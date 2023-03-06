import React from "react";
import CustomAppBar from "./Header/CustomAppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Footer } from "./Footer/Footer";
import { About } from "./About/About";
import { Cart } from "./Cart/Cart";
import { ProductDetail } from "./ProductDetail/ProductDetail";

export const App = () => {
  return (
    <Router>
      <CustomAppBar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/product-detail" element={<ProductDetail />}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
       
      </Routes>
      <Footer/>
    </Router>
  );
};
