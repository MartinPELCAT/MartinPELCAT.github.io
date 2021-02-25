import dynamic from "next/dynamic";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Layout = dynamic(() => import("../components/Layout"));

const Home = () => {
  const { t } = useContext(LanguageContext);

  return <Layout>{t("hello")}</Layout>;
};

export default Home;
