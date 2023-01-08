import React, { useContext } from "react";
import "./style.css";
import { Cart } from "../Context";

const SingleProduct = ({ prod }) => {

    const{cart, SetCart} = useContext(Cart);

  return (
    <div className="products">
      <img id="product-image"src={prod.Image} alt={prod.name} />
      <div className="productDesc">
        <span id="product-name" style={{ fontWeight: 700 }}>{prod.name}</span>
        <span id="product-price" >${prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => {
            SetCart(cart.filter((c)=>c.id!==prod.id));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            SetCart([...cart, prod]);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
