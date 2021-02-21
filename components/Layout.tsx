import React, { FC } from "react";
import Header from "./Header/Header";

export const Layout: FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="md:w-1/2 mx-auto flex px-1 py-4">{children}</div>
    </div>
  );
};
