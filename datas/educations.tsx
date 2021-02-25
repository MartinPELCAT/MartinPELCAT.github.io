import { ReactNode } from "react";

export type EducationType = {
  label: ReactNode;
  school: ReactNode;
  startDate: Date;
  endDate: Date;
  location: { city: ReactNode; country: ReactNode };
  description?: ReactNode;
};

export const educations: EducationType[] = [
  {
    label: "Master Dev. Web",
    school: "Ynov",
    startDate: new Date(2020, 9),
    endDate: new Date(),
    location: { city: "Lyon", country: "France" },
  },
  {
    label: "L3 CPINFO",
    school: "Tetras",
    startDate: new Date(2019, 8),
    endDate: new Date(2020, 8),
    location: { city: "Annecy", country: "France" },
  },
  {
    label: "DUT INFO",
    school: "IUT Annecy",
    startDate: new Date(2016, 6),
    endDate: new Date(2018, 7, 30),
    location: { city: "Annecy", country: "France" },
  },
];
