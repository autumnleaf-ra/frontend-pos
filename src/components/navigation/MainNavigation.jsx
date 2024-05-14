import { GiChickenOven } from "react-icons/gi";
import { IoIosBeer } from "react-icons/io";
const MainNavigation = () => {
  return (
    <nav>
        <ul>
            <li>
                <a href=""><GiChickenOven/></a>
                <span>Foods</span>
            </li>
            <li>
                <a href=""><IoIosBeer/></a>
                <span>Drinks</span>
            </li>
        </ul>
    </nav>
  )
}

export default MainNavigation