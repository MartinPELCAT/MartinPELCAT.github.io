import { ReactNode } from "react";

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
