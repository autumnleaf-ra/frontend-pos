import React from "react";

const NavigationLeftBar = () => {
  return (
    <div className="container">
      <div className="left-bar border w-[25rem]">
        <div className="flex flex-col">
          <div className="store-name">
            <div className="flex space-x-[120px] bg-slate-100 pt-3 pb-3">
              <div className="flex flex-row space-x-2 space-y-3 pl-3">
                <div className="flex">
                  {/* <img src="" alt="picture" /> */}
                  <span className="border pl-[55px] pb-[45px] rounded-md bg-yellow-400"></span>
                </div>
                <div>Store Name</div>
              </div>
              <div className="mt-3">Hide Bar</div>
            </div>
          </div>
          <div className="profile">
            <div className="flex flex-row pl-3 space-x-3">
              <div>Photo Profile</div>
              <div className="flex-col">
                <div>Nama Profile</div>
                <div>Saldo</div>
              </div>
            </div>
          </div>
          <div className="menu-bar">
            <div className="flex flex-col pl-3">
              <div className="menu">1</div>
              <div className="menu">2</div>
              <div className="menu">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationLeftBar;
