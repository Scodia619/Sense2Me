import {Link} from "react-router-dom";

import ProductShopPage from "../components/ProductShopPage";
import NavBar from "../components/NavBar";


import "./shop.css";

function Shop() {

    return(
        <div className="Shop">
            <NavBar/>
            <div className="wrapper-shop">
              <Link to='/product' className="product-link"><ProductShopPage/></Link> 
              <ProductShopPage/>
              <ProductShopPage/>
            </div>
        </div>
    );
}

export default Shop;