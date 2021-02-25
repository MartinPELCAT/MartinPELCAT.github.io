import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));

const Diplomas = () => {
  return <Layout>Diplomas</Layout>;
};
export default Diplomas;
