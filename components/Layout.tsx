import React, { FC } from "react";
import Header from "./Header/Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="md:w-1/2 mx-auto flex pt-2 pb-4 py-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
