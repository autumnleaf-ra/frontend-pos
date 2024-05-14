import { Button } from "flowbite-react";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { RiRectangleFill, RiMessage2Line, RiSettings5Line } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import Logo from "../../assets/logo-mamud.jpeg"
const NavigationLeftBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleCloseSideBar = () => setOpenSidebar(false);
  return (
    <>
      <Button color="Light" onClick={() => setOpenSidebar(true)}><LuMenu/></Button>
    <div className={`fixed top-0 ${openSidebar? 'left-0' : '-left-60'} w-60 h-full bg-white transition-all ease-in-out overflow-y-auto z-50`}>
        <div className="flex flex-row justify-between bg-gray-100 p-6">
        <h2 className="flex flex-row items-center gap-1 font-semibold"><a className="text-5xl"><RiRectangleFill style={{color: "FCCA41"}}/></a>POS</h2>
        <button onClick={() => setOpenSidebar(false)}><AiOutlineClose/></button>
        </div>
        <div className="border-t border-dashed border-gray-600"></div>
        <div className="flex flex-row mt-2 p-8 gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300"/>
          <div>
          <h1>Mamud Sange</h1>
          <h6>Saldo</h6>
          </div>
        </div>
        <div className="">
        <li className="flex items-center justify-center py-2 px-3 my-1">
          <RiMessage2Line/>
          <span className="ml-3">Messages</span>
        </li>
        <li className="flex items-center justify-center py-2 px-3 my-1">
          <RiSettings5Line/>
          <span className="ml-3 mr-3">Settings</span>
        </li>
        <li className="flex items-center justify-center py-2 px-3 my-1">
          <HiOutlineLogout/>
          <span className="ml-3 mr-2">Sign Out</span>
        </li>
        </div>
      </div>
  </>
  );
};

export default NavigationLeftBar;
