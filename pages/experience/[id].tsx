import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { experiences, ExperienceType } from "../../datas/experiences";
import slugify from "slugify";
import ExperienceItem from "../../components/Experiences/ExperienceItem";
import Layout from "../../components/Layout";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useContext } from "react";
import { format, isToday } from "date-fns";

export const slugifyExpUrl = (exp: ExperienceType) =>
  slugify(exp.label + " " + exp.company, { lower: true });

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = experiences.map((exp) => ({
    params: {
      id: slugifyExpUrl(exp),
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ExperienceType> = async ({
  params,
}) => {
  const exp = experiences.find((exp) => slugifyExpUrl(exp) === params.id);

  return { props: JSON.parse(JSON.stringify(exp)) };
};

const Experience = (props: ExperienceType) => {
  const startDate = new Date(props.startDate);
  const endDate = new Date(props.endDate);
  const { dateLocale, t } = useContext(LanguageContext);

  const formatEndDate = (): string => {
    return isToday(endDate)
      ? t("today")
      : format(endDate, "MMM yyyy", { locale: dateLocale });
  };

  const dateRange = () =>
    `${format(startDate, "MMM yyyy", {
      locale: dateLocale,
    })} - ${formatEndDate()}`;

  const description = `${props.label} chez ${props.company} - ${dateRange()}`;
  const BASE_URL = "http://martinpelcat.github.io";
  const url = `${BASE_URL}/experience/${slugifyExpUrl(props)}`;

  return (
    <>
      <Head>
        <title>Portfolio | {props.label}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={`website`} />
        <meta property="og:title" content={props.label} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={BASE_URL + props.companyImage} />

        <meta name="twitter:card" content={`summary_large_image`} />
        <meta property="twitter:domain" content={BASE_URL} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={props.label} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={BASE_URL + props.companyImage} />
      </Head>
      <Layout>
        <div className="md:w-1/2 mx-auto flex px-2 pt-4 pb-8">
          <div className="flex flex-col space-y-4 flex-1">
            <ExperienceItem
              {...props}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Experience;
