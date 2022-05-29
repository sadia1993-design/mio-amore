import React from "react";
import Sidebar from "../navigation/Sidebar";
import TopHeader from "../navigation/TopHeader";

function AppLayout({ children }) {
  return (
    <>
      <TopHeader />
      <Sidebar />

      {/* content */}
      {children}
    </>
  );
}

export default AppLayout;
