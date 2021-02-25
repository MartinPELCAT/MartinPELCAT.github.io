import dynamic from "next/dynamic";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Layout = dynamic(() => import("../components/Layout"));

const Home = () => {
  const { t } = useContext(LanguageContext);

  return (
    <Layout>
      <span className="whitespace-pre-wrap">{t("profile")}</span>
    </Layout>
  );
};

export default Home;
