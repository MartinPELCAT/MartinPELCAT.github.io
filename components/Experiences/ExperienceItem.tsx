import { format, formatDistanceStrict, isToday } from "date-fns";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ExperienceType } from "../../datas/experiences";
import { FacebookComment } from "../icons/FacebookComment";
import { FacebookLike } from "../icons/FacebookLike";
import { FacebookShare } from "../icons/FacebookShare";
import { ExperienceItemFooterItem } from "./ExperienceItemFooterItem";
import Link from "next/link";
import { slugifyExpUrl } from "../../pages/experience/[id]";

const ExperienceItem = (props: ExperienceType) => {
  const { dateLocale, t } = useContext(LanguageContext);

  const formatEndDate = (): string => {
    return isToday(props.endDate)
      ? t("today")
      : format(props.endDate, "MMM yyyy", { locale: dateLocale });
  };

  const url = `/experience/${slugifyExpUrl(props)}`;

  return (
    <div className="bg-white rounded-lg flex flex-1 px-4 pt-4 shadow-md flex-col">
      <div className="flex items-center space-x-3 mb-3">
        <img
          className="rounded-md bg-gray-50"
          src={props.companyImage}
          alt={`Logo de ${props.company}`}
          height={45}
          width={45}
        />
        <Link href={url}>
          <a>
            <div className="font-semibold">{props.label}</div>
          </a>
        </Link>
      </div>
      <div className="text-sm font-light">
        {props.company} . {props.contractType}
      </div>
      <div>
        <div>
          {format(props.startDate, "MMM yyyy", { locale: dateLocale })} -{" "}
          {formatEndDate()}
        </div>
        {formatDistanceStrict(props.startDate, props.endDate, {
          locale: dateLocale,
        })}
      </div>
      <div className="text-gray-600 text-sm font-light">
        {props.location.city}, {props.location.country}
      </div>
      {props.description && (
        <div
          className="mt-3 text-sm"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      )}

      <ExperienceItemFooter />
    </div>
  );
};
export default ExperienceItem;

const ExperienceItemFooter = () => (
  <div className="border-t space-x-2 flex py-1 mt-3">
    <ExperienceItemFooterItem
      icon={<FacebookLike height={20} />}
      text="J'aime"
    />
    <ExperienceItemFooterItem
      icon={<FacebookComment height={20} />}
      text="Commenter"
    />
    <ExperienceItemFooterItem
      icon={<FacebookShare height={20} />}
      text="Partager"
    />
  </div>
);
