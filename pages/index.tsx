import dynamic from "next/dynamic";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Layout = dynamic(() => import("../components/Layout"));

const Home = () => {
  const { t } = useContext(LanguageContext);

  return (
    <Layout>
      <div
        className="container mx-auto bg-indigo-200 relative"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80)",
        }}
      >
        <div className="mx-auto flex justify-center md:p-6">
          <div className="w-1/2 md:w-1/6 transform translate-y-5 md:translate-y-10">
            <img
              src="/images/me.JPG"
              alt=""
              className="object-contain aspect-w-1 rounded-full border-4 border-light-gray"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl mt-10 px-2 font-medium">
        <div className="bg-white rounded-lg p-4 space-y-10 md:text-xl md:text-justify shadow-md">
          <h1 className="font-bold italic text-4xl font"> En quelques mots</h1>
          <p>
            Je suis un étudiant en informatique. Après avoir obtenu un DUT
            Informatique à l'IUT d'Annecy-le-vieux ainsi qu'une licence
            professionnelle Chargé de Projet Informatique, je suis actuellement
            une formation en alternance afin de valider le titre d'Expert en
            Développement Web au sein de l'école Ynov à Lyon.
          </p>

          <p>
            Mon parcours m'a permis de découvrir le secteur web qui, depuis, me
            passionne. Ainsi, suite à mes études, je souhaiterais prendre part à
            un projet dans ce même secteur.
          </p>

          <p>
            En consultant ce site, vous pourrez en apprendre plus sur moi, sur
            les projets que j'ai pu réaliser, et plus encore !
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
