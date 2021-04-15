import React from "react";
import { IconProps } from "./IconProps";

export const DownloadIcon = ({ height = 24, width = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z" />
    </svg>
  );
};
