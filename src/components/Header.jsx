import { IoStarOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import NavigationLeftBar from "./navigation/NavigationLeftBar";
import MainNavigation from "./navigation/MainNavigation";

const Header = () => {
  return (
    <>
    <div className="md:flex flex-row justify-between items-stretch mx-4 mt-5">
        <div className="flex flex-row items-center gap-4">
        <div className="text-center">
   <NavigationLeftBar/>
</div>
        <h2>Nama Toko/Tempat</h2>        
        </div>
        <div className="flex flex-row items-center gap-3">
        <button type="button" className="flex items-center justify-center gap-2 focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-7 py-1.5"><IoStarOutline className="mt-[1px]"/>Reward</button>
        <button type="button" className="flex items-center justify-center gap-2 focus:outline-none text-black text-center bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-7 py-1.5"><MdOutlineShoppingCart className="mt-[1px]"/>Saved</button>
        </div>
    </div>
    <div className="border-2 mx-3 mt-3 rounded-md"></div>
    <MainNavigation/>
    </>
  )
}

export default Header