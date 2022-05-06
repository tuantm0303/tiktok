import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Client() {
  return (
    <div className="client">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Client;
