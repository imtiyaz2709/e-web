import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-teal-900 h-96 py-5 mt-2 w-full">
      <h1 className="text-white text-6xl font-sans font-bold text-center">
        Welcome in WebDeveloper <br /> Company
      </h1>
      <a href="" className="px-3 py-2 bg-indigo-700 text-white border mt-9">
        Let's Start
      </a>
    </div>
  );
};

export default Banner;
