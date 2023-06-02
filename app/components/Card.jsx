import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col w-3/12 items-center border p-5 gap-4" style={{ backgroundColor:props.bg }}>
      <div className="flex flex-col">
        <h1 className="text-black text-2xl font-sans font-semibold">{props.title}</h1>
        <p className="text-black">We are seeking a highly skilled and experienced software developer/designer who can help us with technical aspects of our Awareness in Mind ...</p>
      </div>
      <div className="flex justify-end">
        <a href="" className="px-2 py-1 border rounded bg-red-800 text-white">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
