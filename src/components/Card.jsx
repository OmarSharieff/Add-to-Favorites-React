import React from "react";

const Card = ({ values, index, clickButton }) => {
  const { image, name, artist, added } = values;
  return (
    <div className="w-[18rem] bg-zinc-100 p-4 rounded-md flex gap-5 mt-10">
      <div className="w-24 h-24 bg-orange-500 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold leading-none">{name}</h1>
        <h3 className="mt-1">{artist}</h3>
        <button
          onClick={() => clickButton(index)}
          className={`whitespace-nowrap leading-none ${
            added ? "bg-teal-600" : "bg-orange-500"
          } py-2 px-3 rounded-full mt-3 text-white font-sm`}
        >
          {added ? "Added" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default Card;
