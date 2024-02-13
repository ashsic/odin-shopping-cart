import ShoppingCart from "./ShoppingCart";



export default function Sidebar () {


  return (
    <div>
      <nav>
        <ul>
          <li>
            Home
          </li>

          <li>
            Shop
          </li>

          <li>
            <ShoppingCart/>
          </li>

        </ul>
      </nav>

    </div>
  )
}
