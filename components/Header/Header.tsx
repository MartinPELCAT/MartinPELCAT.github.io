import React, { useContext } from "react";
import { HeaderContextProvider } from "../../contexts/HeaderContext";
import { UserContext } from "../../contexts/UserContext";
import { HeaderLogged } from "./HeaderLogged";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderSignIn } from "./HeaderSignIn";

export default function Header() {
  const user = useContext(UserContext);

  return (
    <header>
      <div className="bg-white block md:flex text-lg sticky top-0 z-50">
        <div className="relative flex-1">
          <div className="flex justify-between">
            <div className="px-4 py-4">
              <span className="text-2xl font-bold">Portfolio</span>
            </div>
            <div className="flex pr-4 justify-center items-center space-x-2">
              {user ? (
                <HeaderContextProvider>
                  <HeaderLogged />
                </HeaderContextProvider>
              ) : (
                <HeaderSignIn />
              )}
            </div>
          </div>
          <div className="flex justify-center flex-1 md:absolute top-0 left-1/2 right-1/2 bottom-0">
            <HeaderMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
