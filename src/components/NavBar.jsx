import React from "react";

const NavBar = () => {
  return (
    <div className="z-50 w-full fixed h-16 lg:h-[70px] bg-white shadow-sm">
      <div className="flex h-full items-center gap-2 pl-4">
        <img className="w-10 lg:w-14" src="./svg-images/logo.png" alt="" />
        <p className="font-semibold text-base lg:text-xl">
          Cryptocurrency DashBoard
        </p>
      </div>
    </div>
  );
};

// export default
export default NavBar;
