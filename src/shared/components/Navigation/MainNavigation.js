import React, { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Modal from "./Modal";

const MainNavigation = () => {
  const [modal, setModal] = useState(false);
  console.log(modal);
  return (
    <nav className="flex justify-between items-center py-3 first-letter: px-5">
      <Link to={"/"} className="text-xl tracking-tighter flex items-center">
        <FaLocationArrow className="mr-1" />
        My pins.
      </Link>
      <div className="nav__hamburger cursor-pointer sm:hidden">
        {modal && (
          <Modal>
            <div className="my-3 w-full">
              <IoMdClose
                className="text-2xl  cursor-pointer text-right ml-auto mr-5"
                onClick={() => setModal(false)}
              />
            </div>
            <NavLink to={"/"}>All users</NavLink>
            <NavLink to={`/u1/places`}>My places</NavLink>
            <NavLink to={"/places/new"}>Add place</NavLink>
            <NavLink to={"/auth"}>Authenticate</NavLink>
          </Modal>
        )}
        <FiMenu className="text-xl" onClick={() => setModal(true)} />
      </div>
      <div className="hidden sm:block nav__items flex items-center justify-evenly flex-wrap ">
        <NavLink to={"/"}>All users</NavLink>
        <NavLink to={`/u1/places`}>My places</NavLink>
        <NavLink to={"/places/new"}>Add place</NavLink>
        <NavLink to={"/auth"}>Authenticate</NavLink>
      </div>
    </nav>
  );
};

export default MainNavigation;
