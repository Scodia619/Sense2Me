import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Product from "./pages/product";
import './pages/product.js'

import ProductShopPage from "./components/ProductShopPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/product" element={<Product />}></Route>
    </Routes>
      <div className="App">
        <div className="nav">Sense2Me</div>
        <div className="wrapper-shop">
          <Link to='/product'><ProductShopPage/></Link>
          <ProductShopPage/>
          <ProductShopPage/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;