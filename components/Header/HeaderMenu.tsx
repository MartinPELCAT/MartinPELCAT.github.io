import React from "react";
import { BriefCaseIcon } from "../icons/BriefCaseIcon";
import { ContactIcon } from "../icons/ContactIcon";
import { DiplomaIcon } from "../icons/DiplomaIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { SkillIcon } from "../icons/SkillIcon";

import { HeaderMenuItem } from "./HeaderMenuItem";

export const HeaderMenu = () => (
  <div className="justify-between flex flex-1 md:flex-none">
    <HeaderMenuItem icon={<ProfileIcon />} link="/" label="profile" />
    <HeaderMenuItem
      icon={<BriefCaseIcon />}
      link="/experiences"
      label="Experiences"
    />
    <HeaderMenuItem icon={<DiplomaIcon />} link="/diplomas" label="Diplomes" />
    <HeaderMenuItem icon={<SkillIcon />} link="/skills" label="Compétences" />
    <HeaderMenuItem icon={<ContactIcon />} link="/contact" label="Contact" />
  </div>
);
