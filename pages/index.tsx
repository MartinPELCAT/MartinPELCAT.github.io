import { useContext, useEffect } from "react";
import { Layout } from "../components/Layout";
import { LanguageContext } from "../contexts/LanguageContext";

const Home = () => {
  const { t } = useContext(LanguageContext);

  return <Layout>{t("hello")}</Layout>;
};

export default Home;
