import React from "react";
import Header from "./Header.jsx";
import LeftSidebar from "./LeftSidebar.jsx";
import Content from "./Content.jsx";
import RightSidebar from "./RightSidebar.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      {/* Left Bar */}
      <LeftSidebar />
      {/* Content */}
      <Content />
      {/* Right bar */}
      <RightSidebar />
    </>
  );
};

export default Layout;
