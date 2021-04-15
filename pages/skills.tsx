import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));

const Skills = () => {
  return (
    <Layout>
      <div className="divide-y space-y-10 px-2">
        <div className="max-w-2xl pt-5 mx-auto grid grid-cols-3 md:grid-cols-5 gap-3">
          <div className="col-span-3 md:col-span-5 font-bold text-3xl">
            Core
          </div>
          <SkillItem image="/next-js.svg" text="NextJS" />
          <SkillItem image="/react.png" text="ReactJS" />
          <SkillItem image="/graphql.png" text="GraphQL" />
          <SkillItem image="/tailwindcss.png" text="TailwindCSS" />
          <SkillItem image="/typescript.png" text="Typescript" />
          <SkillItem image="/nodejs.png" text="NodeJS" />
          <SkillItem image="/javascript.png" text="Javascript" />
        </div>
        <div className="max-w-2xl pt-5 mx-auto grid grid-cols-3 md:grid-cols-5 gap-3">
          <div className="col-span-3 md:col-span-5 font-bold text-3xl">
            Autres
          </div>
          <SkillItem image="/postgresql.png" text="PostgreSQL" />
          <SkillItem image="/git.png" text="GIT" />
          <SkillItem image="/java.png" text="JAVA" />
          <SkillItem image="/hibernate.png" text="Hibernate" />
          <SkillItem image="/spring.png" text="Spring" />
          <SkillItem image="/laravel.png" text="Laravel" />
          <SkillItem image="/symfony.png" text="Symfony" />
          <SkillItem image="/rest.png" text="RestAPI" />
          <SkillItem image="/csharp.png" text="C#" />
          <SkillItem image="/mysql.png" text="MySql" />
          <SkillItem image="/oracle.png" text="Oracle" />
          <SkillItem image="/OSGI.png" text="OSGI" />
          <SkillItem image="/php.png" text="Php" />
          <SkillItem image="/python.png" text="Python" />
          <SkillItem image="/jquery.gif" text="JQuery" />
          <SkillItem image="/office.png" text="Office" />
          <SkillItem image="/anglais.png" text="Anglais" />
        </div>
      </div>
    </Layout>
  );
};

interface Props {
  text: string;
  image: string;
}
const SkillItem = ({ image, text }: Props) => {
  return (
    <div className="bg-white rounded-md shadow flex py-3 flex-col justify-between">
      <img src={`/skills${image}`} alt="" className="px-3" />
      <div className="text-center font-light italic pt-3">{text}</div>
    </div>
  );
};

export default Skills;
