import SidebarCart from "./SidebarCart";



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
            <SidebarCart/>
          </li>

        </ul>
      </nav>

    </div>
  )
}
