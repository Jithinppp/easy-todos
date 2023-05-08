import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white flex justify-center flex-col items-center py-5 ">
      <div>
        <Link className="mx-3" to={"#"}>
          LinkedIn
        </Link>
        <Link to={"#"}>Github</Link>
      </div>
      <p className="text-sm font-extralight">all rights reserved 2023</p>
    </footer>
  );
};

export default Footer;
