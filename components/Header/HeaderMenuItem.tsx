import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = { icon: ReactNode; link: string; label?: string };

export const HeaderMenuItem = (props: Props) => {
  const { pathname } = useRouter();

  return pathname !== props.link ? (
    <ItemDefaultLink {...props} />
  ) : (
    <ItemActiveLink {...props} />
  );
};

const ItemDefaultLink = ({ icon, link }: Props) => {
  return (
    <div className="py-1 md:px-2 flex w-1/5 justify-around">
      <Link href={link}>
        <a className="w-full">
          <div className="md:w-28 h-full bg-white bg-opacity-0 hover:bg-opacity-20 rounded-lg justify-center flex py-4 md:py-0">
            <div className="self-center">{icon}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

const ItemActiveLink = ({ icon }: Props) => {
  return (
    <div className="flex border-b-3 md:px-2 border-white w-1/5 justify-around">
      <div className="md:w-28 h-full rounded-lg justify-center flex py-4 md:py-0">
        <div className="self-center mt-3px">{icon}</div>
      </div>
    </div>
  );
};
