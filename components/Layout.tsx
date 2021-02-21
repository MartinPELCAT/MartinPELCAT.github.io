import React, { FC } from "react";
import Header from "./Header/Header";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
