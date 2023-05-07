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
      <main className="flex justify-center flex-col px-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
