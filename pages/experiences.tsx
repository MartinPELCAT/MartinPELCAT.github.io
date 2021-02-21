import { ExperienceItem } from "../components/Experiences/ExperienceItem";
import { Layout } from "../components/Layout";
import { experiences } from "../datas/experiences";

const Experiences = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-4 flex-1">
        {experiences.map((experience) => (
          <ExperienceItem {...experience} />
        ))}
      </div>
    </Layout>
  );
};

export default Experiences;
