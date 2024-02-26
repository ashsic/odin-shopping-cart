import { useState } from "react";
import ShoppingCart from "./Cart";
import { Link } from "react-router-dom";


export default function SidebarCart (props) {
  

  console.log(props)

  return (

    <Link to="/cart">
      <div>
        <p>Cart</p>
      </div>
      <div className="cart-with-num">
        <span>{props.cart.size}</span>
        <img alt="Shopping cart icon"/>
        
      </div>
    </Link>

  );
};
