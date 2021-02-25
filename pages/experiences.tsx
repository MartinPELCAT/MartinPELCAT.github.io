import { experiences } from "../datas/experiences";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));

const ExperienceItem = dynamic(
  () => import("../components/Experiences/ExperienceItem")
);

const Experiences = () => (
  <Layout>
    <div className="flex flex-col space-y-4 flex-1">
      {experiences.map((experience, i) => (
        <ExperienceItem {...experience} key={i} />
      ))}
    </div>
  </Layout>
);

export default Experiences;
