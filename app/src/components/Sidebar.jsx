


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
            <div>
              Cart
            </div>
            <div className="cart-with-num">
              <span>1</span>
              <img alt="Shopping cart icon"/>
            </div>
          </li>

        </ul>
      </nav>

    </div>
  )
}
