import { useState } from "react";
import ShoppingCart from "./Cart";
import { Link } from "react-router-dom";


export default function SidebarCart (props) {
  



  return (
    // 
    <>
    {console.log(props.cart)}
    <Link to="cart">aaaaa</Link>
      <div>
        <p>Cart</p>
      </div>
      <div className="cart-with-num">
        <span>1</span>
        <img alt="Shopping cart icon"/>
      </div>
    </>
    //</Link>
  );
};
