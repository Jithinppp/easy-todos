import React from "react";

const Card = (props) => {
  return (
    <div
      className={`${props.className} flex items-center bg-white p-2 hover:text-white rounded-sm hover:drop-shadow-lg transition-all ease-in duration-200`}
    >
      {props.children}
    </div>
  );
};

export default Card;
