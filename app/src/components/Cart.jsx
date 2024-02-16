import { useState } from "react";

// Shopping cart can have items added to, removed from it, 
// can be expanded, presence/count of items edited while expanded

export default function Cart (props) {


  const openCart = (event) => {
    console.log(event);
  };

  return (
    <div onClick={openCart}>
      
      <div>
        <p>Cart</p>
      </div>
      <div className="cart-with-num">
        <span>{props.cart.size}</span>
        <img alt="Shopping cart icon"/>
      </div>

    </div>
  );
};
