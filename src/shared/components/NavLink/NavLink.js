import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <Link
      to={props.to}
      className={`${props.className} underline mx-2 hover:text-black hover:bg-white px-3 py-2 hover:no-underline text-sm transition-all ease-in duration-300 rounded-sm`}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
