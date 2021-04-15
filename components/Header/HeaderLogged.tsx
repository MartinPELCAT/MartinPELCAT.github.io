import clsx from "clsx";
import React, { ReactNode, useContext, useRef } from "react";
import { useClickAway } from "react-use";
import { HeaderContext } from "../../contexts/HeaderContext";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link";
import { ChevronDown } from "../icons/ChevronDown";
import { LanguageContext } from "../../contexts/LanguageContext";

export const HeaderLogged = () => {
  const { firstName, lastName } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(HeaderContext);

  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  return (
    <>
      <div className="flex cursor-pointer">
        <Link href="/">
          <a>
            <div className="flex rounded-full hover:bg-white hover:bg-opacity-10 py-1 pl-2 pr-4 space-x-3">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-40 overflow-hidden">
                <img
                  src="/images/me.JPG"
                  alt="Github profile"
                  height={40}
                  width={40}
                />
              </div>
              <div className="my-auto">
                <div className="flex space-x-1">
                  <span>{firstName}</span>
                  <span className="hidden 2xl:block">{lastName}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div ref={ref} className="relative">
        <button
          name="DropDown menu"
          onClick={() => setIsOpen((open) => !open)}
          className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex justify-center items-center focus:outline-none focus:ring-1 focus:ring-white"
        >
          <span className="sr-only">Menu Dépliant</span>
          <ChevronDown height={19} width={19} />
        </button>

        <DropDownMenu show={isOpen} />
      </div>
    </>
  );
};

type DropdownMenuProps = { show: boolean };

const DropDownMenu = ({ show }: DropdownMenuProps) => {
  const { setLocale } = useContext(LanguageContext);
  return (
    <div
      className={clsx(
        [!show && "hidden"],
        "absolute top-14 right-0 bg-white border border-gray-300 w-60 rounded-lg p-2"
      )}
    >
      {/* <DropDownItem link="/admin" label="Administration" icon={<></>} /> */}
      <DropDownItem label="Paramètres" icon={<></>} />
      <DropDownItem
        label="Language"
        icon={<></>}
        onClick={() => setLocale((prev) => (prev === "fr" ? "en" : "fr"))}
      />
      <DropDownItem label="Deconnexion" icon={<></>} />
    </div>
  );
};

type DropDownItemProps = {
  icon: ReactNode;
  label: string;
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const DropDownItem = ({ label, icon, onClick, link }: DropDownItemProps) => {
  const { setIsOpen } = useContext(HeaderContext);
  const DefaultItem = () => (
    <div
      role="button"
      className="py-1 align-middle px-2 flex space-x-2 hover:bg-light-gray rounded"
      onClick={(event) => {
        onClick && onClick(event);
        setIsOpen(false);
      }}
    >
      <div className="mr-1">{icon}</div>
      <div className="flex-1">{label}</div>
    </div>
  );

  const LinkItem = () => (
    <Link href={link!}>
      <a>
        <DefaultItem />
      </a>
    </Link>
  );

  return link ? <LinkItem /> : <DefaultItem />;
};
