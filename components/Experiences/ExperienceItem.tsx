import { format, formatDistanceStrict, isToday } from "date-fns";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ExperienceType } from "../../datas/experiences";
import Link from "next/link";
import { slugifyExpUrl } from "../../pages/experience/[id]";
import { FacebookItemFooter } from "../FacebookItemFooter";

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
            <div className="font-semibold">{t(props.label)}</div>
          </a>
        </Link>
      </div>
      <div className="text-sm font-light">
        {t(props.company)} . {t(props.contractType)}
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
          dangerouslySetInnerHTML={{ __html: t(props.description) }}
        />
      )}

      <FacebookItemFooter />
    </div>
  );
};
export default ExperienceItem;
