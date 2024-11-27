import React from "react";
import { useLocation,Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/login";
  return (
    <>
      <div className="bg">
      {!hideNavbar && <Navbar />}

        <Outlet />
      </div>
    </>
  );
}

export default Layout;
