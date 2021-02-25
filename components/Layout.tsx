import React, { FC } from "react";
import Header from "./Header/Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="md:w-1/2 mx-auto flex px-2 pt-4 pb-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
