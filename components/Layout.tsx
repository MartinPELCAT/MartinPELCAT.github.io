import React, { FC } from "react";
import Header from "./Header/Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-24 md:pb-12">{children}</main>
    </div>
  );
};

export default Layout;
