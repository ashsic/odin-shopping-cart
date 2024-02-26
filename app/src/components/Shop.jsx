import SidebarCart from "./SidebarCart"
import { useState, useEffect } from "react";


export default function Shop (props) {
  const [shopItems, setShopItems] = useState(null);
  const cartItems = props.cart[0];
  const setCartItems = props.cart[1];

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setShopItems(json))
        
    };

    fetchProducts();
  }, []);


  const addToCart = (e) => {
    const itemNo = parseInt(e.target.parentElement.className);
    let flag = true;
    cartItems.contents.forEach((item, index) => {
      if (item.id == itemNo) {
        let newCart = {
          size: cartItems.size + 1,
          contents: cartItems.contents
        };

        newCart.contents[index].quantity += 1;

        setCartItems(newCart);
        flag = false;
      };
    });

    if (flag) {
      const newCart = {
        size: cartItems.size + 1,
        contents: [...cartItems.contents, {...shopItems[itemNo - 1], quantity: 1}]
      };
      setCartItems(newCart);
    };
  };
  


  // console.log(props.cart[1])


  return (
    <div>
      <div>
        <SidebarCart cart={props.cart[0]}/>
        <h1>Shop</h1>
      </div>
      <ul>
        {shopItems ? (shopItems.map((item, index) => {
          // {console.log(item)}
          return <li className={item.id} key={item.id} ><img src={item.image} style={{width: 200 + 'px'}} ></img><div>{item.title + " $" + item.price}</div><button onClick={addToCart}>Add to cart</button></li>
        })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};
