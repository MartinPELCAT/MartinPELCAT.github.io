import { experiences } from "../datas/experiences";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));

const ExperienceItem = dynamic(
  () => import("../components/Experiences/ExperienceItem")
);

const Experiences = () => (
  <Layout>
    <div className="max-w-2xl mx-auto flex px-2 pt-4 pb-8">
      <div className="flex flex-col space-y-4 flex-1">
        {experiences.map((experience, i) => (
          <ExperienceItem {...experience} key={i} />
        ))}
      </div>
    </div>
  </Layout>
);

export default Experiences;
