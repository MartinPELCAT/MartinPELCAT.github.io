import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));

const Contact = () => {
  return <Layout>Contact</Layout>;
};
export default Contact;
