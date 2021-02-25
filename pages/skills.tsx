import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));

const Skills = () => {
  return <Layout>Skills</Layout>;
};
export default Skills;
