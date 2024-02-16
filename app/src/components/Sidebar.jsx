import SidebarCart from "./SidebarCart";
import { Link } from 'react-router-dom'


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
