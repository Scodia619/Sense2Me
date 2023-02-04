import "./product.css";

import picture from "../images/double-beaded-roller.jpg";

function Product() {

    return(
        <div className="product">
            <div class="nav">Sense2Me</div>
            <div className="product-page-content">
                <div className="left">
                    <div className="product-image">
                        <img src={picture} alt="Double Beaded Roller" className="product-img-lrg"/>
                    </div>
                </div>
                <div className="right">
                    <div className="title"><h1>Double Beaded Anxiety Roller</h1></div>
                    <div className="price-product-page"><h2>7.20</h2></div>
                    <div className="delivery-info">Free Delivery</div>
                    <div className="selection flex">
                        <select name="colors" className="select-bar flex">
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="pink">Pink</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Product;