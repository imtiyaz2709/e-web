import React from "react";

const Header = () => {
  return (
    <div className="flex bg-black py-3 justify-between px-8 items-center">
      <h1 className="text-xl font-sans font-semibold text-white">e-Web</h1>
      <div className="flex">
        <input
          type="text"
          className="px-3 py-2 border-0 outline-0"
          placeholder="Search"
          size="40"
        />
        <input
          type="submit"
          className="px-2 py-1 bg-white text-black"
          value="Go"
        />
      </div>
      <div className="flex gap-5">
        <a href="" className="text-white font-sans">Home</a>
        <a href="" className="text-white font-sans">About</a>
        <a href="" className="text-white font-sans">Service</a>
        <a href="" className="text-white font-sans">Contact</a>
      </div>
    </div>
  );
};

export default Header;
