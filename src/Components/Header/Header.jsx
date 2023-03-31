import React from "react";
import Profile from "../../assets/image/profile.jpg";
const Header = () => {
  return (
    <div className="px-2 lg:px-28 pt-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl text-slate-700 font-bold">Knowledge Cafe</h1>
        <img src={Profile} alt="" className="w-14 h-14 rounded-full" />
      </div>
      <hr />
    </div>
  );
};
export default Header;
