import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Homepage from './components/Homepage.jsx';
import Cart from './components/Cart.jsx';
import Shop from './components/Shop.jsx';
import Login from './components/Login.jsx';
import ErrorPage from './components/ErrorPage.jsx';

function Router (props) {
  //console.log('App.js', props.cart[1])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage cart={props.cart[0]} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart",
      element: <Cart cart={props.cart[0]} />,
    },
    {
      path: "/shop",
      element: <Shop cart={props.cart} />,
    },
    {
      path: "/login",
      element: <Login cart={props.cart[0]} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

function App() {
  const [cart, setCart] = useState(
    {
      size: 1,
      contents: [
        {
          id: -1,
          name: "Cool Shirt",
          quantity: 1
        },
      ]
    }
  );

  return (
    <Router cart={ [cart, setCart] } />
  );
};

export default App
