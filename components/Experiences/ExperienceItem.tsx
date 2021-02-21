import { format, formatDistanceStrict, isToday } from "date-fns";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ExperienceType } from "../../datas/experiences";

export const ExperienceItem = (props: ExperienceType) => {
  const { dateLocale, t } = useContext(LanguageContext);

  const formatEndDate = (): string => {
    return isToday(props.endDate)
      ? t("today")
      : format(props.endDate, "MMM yyyy", { locale: dateLocale });
  };

  return (
    <div className="bg-gray-200 rounded-lg flex flex-1 p-4 shadow-md flex-col">
      <div className="font-semibold">{props.label}</div>
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
        <div className="my-3 text-sm">{props.description}</div>
      )}
    </div>
  );
};
