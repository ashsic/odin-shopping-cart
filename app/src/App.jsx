import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Homepage from './components/Homepage.jsx';
import Cart from './components/Cart.jsx';
import Shop from './components/Shop.jsx';
import Login from './components/Login.jsx';
import ErrorPage from './components/ErrorPage.jsx';

function Router (props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage cart={props.cart} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart",
      element: <Cart cart={props.cart} />,
    },
    {
      path: "/shop",
      element: <Shop cart={props.cart} />,
    },
    {
      path: "/login",
      element: <Login cart={props.cart} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

function App() {
  const [cartContents, setCartContents] = useState(
    {
      size: 1,
      contents: [
        {
          name: "Cool Shirt",
          quantity: 1
        },
      ]
    }
  );

  return (
    <Router cart={cartContents} />
  )
}

export default App
