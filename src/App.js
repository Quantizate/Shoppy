import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product.js";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Products from "./pages/Products";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import Contact from "./components/Contact";
import About from "./pages/About";

function App() {
  return (
    // <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route exact path="/category/:name" element={<CategoryProducts />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
