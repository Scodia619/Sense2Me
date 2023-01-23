import React from "react";

//Importing this pages css
import "./ProductShopPage.css";

//importing an image
import picture from "../images/double-beaded-roller.jpg";

//importing components
import ProductDetailsShop from "./ProductDetailsShop";

const ProductShopPage = () => {

    return (
        
          <div className="product-wrapper" id="double">
              <div className="image">
                  <img src={picture}  alt="A double beaded roller to help with anxiety" className="product-img-sml"/>
              </div>
              <ProductDetailsShop/>
          </div>);
};

export default ProductShopPage;