import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import "./App.css"

import Shop from "./pages/shop";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>
</BrowserRouter>
    
  );
}

export default App;
