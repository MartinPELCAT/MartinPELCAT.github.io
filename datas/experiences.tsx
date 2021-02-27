import { ReactNode } from "react";

export type ExperienceType = {
  label: string;
  company: string;
  companyImage: string;
  startDate: Date;
  endDate: Date;
  location: { city: string; country: string };
  description?: string;
  contractType: string;
};

export const experiences: ExperienceType[] = [
  {
    label: "work-study-student",
    company: "general-concil-company",
    companyImage: "/images/CD74.png",
    startDate: new Date(2020, 8),
    endDate: new Date(),
    location: { city: "Annecy", country: "France" },
    contractType: "study-contract",
    description: "general-concil-description",
  },
  {
    label: "apprentice-java-dev", //"Alternant développeur JAVA",
    company: "Sopra HR Software",
    companyImage: "/images/sopra.png",

    startDate: new Date(2019, 8),
    endDate: new Date(2020, 8),
    location: { city: "Annecy", country: "France" },
    contractType: "study-contract",
    description: "sopra-description",
  },
  {
    label: "java-developper",
    company: "Overkiz",
    companyImage: "/images/overkiz.png",

    startDate: new Date(2018, 6),
    endDate: new Date(2018, 7, 30),
    location: { city: "Annecy", country: "France" },
    contractType: "CDD",
    description: "overkiz-description-cdd",
  },
  {
    label: "intership-java-developper",
    company: "Overkiz",
    companyImage: "/images/overkiz.png",

    startDate: new Date(2018, 3),
    endDate: new Date(2018, 5, 30),
    location: { city: "Annecy", country: "France" },
    contractType: "internship",
    description: "overkiz-description-cdd",
  },
];
