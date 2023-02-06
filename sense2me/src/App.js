import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css"

import Shop from "./pages/shop";
import Home from "./pages/home";
import Product from "./pages/product";
import ContactUs from "./pages/contact-us";
import Login from "./pages/login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
</BrowserRouter>
    
  );
}

export default App;
