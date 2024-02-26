import { useState } from "react";
import SidebarCart from "./SidebarCart"
import { Link } from "react-router-dom";

// Shopping cart can have items added to, removed from it, 
// can be expanded, presence/count of items edited while expanded

export default function Cart (props) {
  const cartItems = props.cart.contents;
  console.log(cartItems)

{/* <button onClick={addToCart}>Add to cart</button> */}

  return (
    <div>
      <div>
        <Link to='/shop' >
          <p>Shop</p>
        </Link>
      </div>
      <ul>
        {cartItems ? (cartItems.map((item, index) => {
          return <li key={index} ><img src={item.image} style={{width: 100 + 'px'}} ></img><div>{item.title + " $" + item.price + " num: " + item.quantity}</div></li>
        })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      

    </div>
  );
};
