import { ReactNode } from "react";
import { FacebookComment } from "./icons/FacebookComment";
import { FacebookLike } from "./icons/FacebookLike";
import { FacebookShare } from "./icons/FacebookShare";

export const FacebookItemFooter = () => (
  <div className="border-t space-x-2 flex py-1 mt-3">
    <ExperienceItemFooterItem
      icon={<FacebookLike height={20} />}
      text="J'aime"
    />
    <ExperienceItemFooterItem
      icon={<FacebookComment height={20} />}
      text="Commenter"
    />
    <ExperienceItemFooterItem
      icon={<FacebookShare height={20} />}
      text="Partager"
    />
  </div>
);

type ExperienceItemFooterItemProps = { icon: ReactNode; text: string };
export const ExperienceItemFooterItem = ({
  icon,
  text,
}: ExperienceItemFooterItemProps) => (
  <div
    role="button"
    className="w-1/3 flex space-x-2 justify-center items-center rounded-md hover:bg-gray-200 py-1"
  >
    {icon}
    <span className="hidden md:block">{text}</span>
  </div>
);
