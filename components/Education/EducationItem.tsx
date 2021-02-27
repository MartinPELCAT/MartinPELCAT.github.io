import { format, formatDistanceStrict, isToday } from "date-fns";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { EducationType } from "../../datas/educations";
import {} from "../../datas/experiences";
import { FacebookItemFooter } from "../FacebookItemFooter";

const EducationItem = (props: EducationType) => {
  const { dateLocale, t } = useContext(LanguageContext);

  const formatEndDate = (): string => {
    return isToday(props.endDate)
      ? t("today")
      : format(props.endDate, "MMM yyyy", { locale: dateLocale });
  };

  return (
    <div className="bg-white rounded-lg flex flex-1 px-4 pt-4 shadow-md flex-col">
      <div className="font-semibold">{props.label}</div>
      <div className="text-sm font-light">{props.school}</div>
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
      <FacebookItemFooter />
    </div>
  );
};
export default EducationItem;
