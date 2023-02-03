import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Product from "./pages/product";
import Shop from "./pages/shop";
import './pages/product.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      </div>
    <Routes>
      <Route path="product" element={<Product />}></Route>
      <Route index element={<Shop />}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;