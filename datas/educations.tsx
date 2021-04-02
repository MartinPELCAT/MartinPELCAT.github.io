import { ReactNode } from "react";

export type EducationType = {
  label: ReactNode;
  school: ReactNode;
  startDate: Date;
  endDate: Date;
  schoolLogo: string;
  location: { city: ReactNode; country: ReactNode };
  description?: ReactNode;
};

export const educations: EducationType[] = [
  {
    label: "Master Dev. Web",
    school: "Ynov",
    startDate: new Date(2020, 9),
    endDate: new Date(),
    schoolLogo: "/images/ynov-logo.png",
    location: { city: "Lyon", country: "France" },
  },
  {
    label: "L3 CPINFO",
    school: "Tetras",
    startDate: new Date(2019, 8),
    endDate: new Date(2020, 8),
    schoolLogo: "/images/usmb-logo.png",
    location: { city: "Annecy", country: "France" },
  },
  {
    label: "DUT INFO",
    school: "IUT Annecy",
    startDate: new Date(2016, 6),
    endDate: new Date(2018, 7, 30),
    schoolLogo: "/images/usmb-logo.png",
    location: { city: "Annecy", country: "France" },
  },
];
