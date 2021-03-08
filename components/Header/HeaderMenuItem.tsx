import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = { icon: ReactNode; link: string; label: string };

export const HeaderMenuItem = (props: Props) => {
  const { pathname } = useRouter();

  return pathname !== props.link ? (
    <ItemDefaultLink {...props} />
  ) : (
    <ItemActiveLink {...props} />
  );
};

const ItemDefaultLink = ({ icon, link, label }: Props) => {
  return (
    <div className="py-1 lg:px-2 flex w-1/5 justify-around">
      <Link href={link}>
        <a className="w-full">
          <span className="sr-only">{label}</span>
          <div className="lg:w-28 h-full bg-light-gray bg-opacity-0 hover:bg-opacity-70 rounded-lg justify-center flex py-4 lg:py-0">
            <div className="self-center">{icon}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

const ItemActiveLink = ({ icon }: Props) => {
  return (
    <div className="flex border-t-3 lg:border-t-0 lg:border-b-3 lg:px-2 border-gray-400 w-1/5 justify-around">
      <div className="lg:w-28 h-full rounded-lg justify-center flex py-4 lg:py-0">
        <div className="self-center mb-3px lg:mb-0 lg:mt-3px">{icon}</div>
      </div>
    </div>
  );
};
