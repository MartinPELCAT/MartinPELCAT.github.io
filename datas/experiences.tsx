import { ReactNode } from "react";

export type ExperienceType = {
  label: ReactNode;
  company: ReactNode;
  companyImage: string;
  startDate: Date;
  endDate: Date;
  location: { city: ReactNode; country: ReactNode };
  description?: ReactNode;
  contractType: ReactNode;
};

export const experiences: ExperienceType[] = [
  {
    label: "Étudiant en alternance",
    company: "Haute-Savoie General Council",
    companyImage: "/images/CD74.png",
    startDate: new Date(2020, 8),
    endDate: new Date(),
    location: { city: "Annecy", country: "France" },
    contractType: "Contrat en alternance",
    description: (
      <>
        <dl>
          <dt className="font-medium">RubyOnRails:</dt>
          <dd>- Custom dev on BigBlueButton/GreenLight</dd>
        </dl>
        <br />
        <dl>
          <dt className="font-medium">JavaScript/Typescript:</dt>
          <dd>- Web Chat (Electron)</dd>
          <dd>- App Visio using BigBlueButton API (NextJs)</dd>
        </dl>
        <br />
        <dl>
          <dt className="font-medium">PHP:</dt>
          <dd>- LimeSurvey Plugin</dd>
          <dd>- Custom devs on Mantis bug tracker</dd>
          <dd>- Multiple Joomla website update and custom devs</dd>
        </dl>
      </>
    ),
  },
  {
    label: "Alternant développeur JAVA",
    company: "Sopra HR Software",
    companyImage: "/images/sopra.png",

    startDate: new Date(2019, 8),
    endDate: new Date(2020, 8),
    location: { city: "Annecy", country: "France" },
    contractType: "Contrat en alternance",
    description: (
      <>
        Maintenance and evolution of the HR software.
        <br />
        <br />
        Typescript, JavaScript(JQuery), Java 8 (Karaf, OSGI, BPMN), HTML/CSS
      </>
    ),
  },
  {
    label: "Développeur JAVA",
    company: "Overkiz",
    companyImage: "/images/overkiz.png",

    startDate: new Date(2018, 6),
    endDate: new Date(2018, 7, 30),
    location: { city: "Annecy", country: "France" },
    contractType: "CDD",
    description: (
      <>
        Add services in the cloud.
        <br />
        <br />
        JAVA 7 (tomcat, spring, hibernate), HTML/CSS, JavaScript(Jquery)
      </>
    ),
  },
  {
    label: "Stagiaire en développement Java",
    company: "Overkiz",
    companyImage: "/images/overkiz.png",

    startDate: new Date(2018, 3),
    endDate: new Date(2018, 5, 30),
    location: { city: "Annecy", country: "France" },
    contractType: "Stage",
  },
];
