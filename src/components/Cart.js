import React, { useEffect, useState } from "react";
import SingleProduct from "./singleProduct";
import { Cart } from "../Context";
import { useContext } from "react";

const CartPage = () => {
  const{cart} = useContext(Cart);
  const [total, SetTotal] = useState();
  useEffect(() => {
    SetTotal(cart.reduce((acc, curr) => acc+Number(curr.price), 0));
  },[cart]);


  return (
    <div>
      <span style={{ fontSize: 30 }}>My cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total Rs {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
