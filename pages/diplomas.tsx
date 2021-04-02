import dynamic from "next/dynamic";
import { educations } from "../datas/educations";

const Layout = dynamic(() => import("../components/Layout"));

const EducationItem = dynamic(
  () => import("../components/Education/EducationItem")
);
const Diplomas = () => (
  <Layout>
    <div className="max-w-2xl mx-auto flex px-2 pt-4 pb-8">
      <div className="flex flex-col space-y-4 flex-1">
        {educations.map((experience, i) => (
          <EducationItem {...experience} key={i} />
        ))}
      </div>
    </div>
  </Layout>
);
export default Diplomas;
