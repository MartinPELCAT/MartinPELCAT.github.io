import React, { useContext } from "react";
import { HeaderContextProvider } from "../../contexts/HeaderContext";
import { UserContext } from "../../contexts/UserContext";
import { HeaderLogged } from "./HeaderLogged";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderSignIn } from "./HeaderSignIn";
import Link from "next/link";

export default function Header() {
  const user = useContext(UserContext);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white block lg:flex text-lg sticky top-0 z-50">
        <div className="relative flex-1">
          <div className="flex justify-between">
            <div className="px-4 py-4">
              <Link href="/">
                <a>
                  <span className="text-2xl font-bold">Portfolio</span>
                </a>
              </Link>
            </div>
            <div className="flex pr-4 justify-center items-center space-x-1">
              {user ? (
                <HeaderContextProvider>
                  <HeaderLogged />
                </HeaderContextProvider>
              ) : (
                <HeaderSignIn />
              )}
            </div>
          </div>
          <div className="flex justify-center bg-white flex-1 lg:absolute fixed lg:top-0 lg:left-1/2 lg:right-1/2 lg:bottom-0 bottom-0 left-0 right-0">
            <HeaderMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
