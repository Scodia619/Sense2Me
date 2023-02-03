import {Link} from "react-router-dom";

import ProductShopPage from "../components/ProductShopPage";
import "./shop.css";

function Shop() {

    return(
        <div className="main">
            <div className="nav">Sense2Me</div>
            <div className="wrapper-shop">
                <Link to="product"><ProductShopPage/></Link>
                <ProductShopPage/>
                <ProductShopPage/>
                <ProductShopPage/>
            </div>
        </div>
    );
}

export default Shop;