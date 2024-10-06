import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="main__content">
      <section className="sidebar">
        <Navbar />
      </section>
      <section className="content">{children}</section>
    </section>
  );
};

export default Layout;
