import React from "react";
import MainNavigation from "../components/Navigation/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main className="flex flex-col px-3 my-3 h-full">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
