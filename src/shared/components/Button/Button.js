import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  if (props.link) {
    return (
      <Link to={props.to} className={`${props.className} underline`}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${props.className} bg-green-600 text-white p-2 text-xs my-1 rounded-sm `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
