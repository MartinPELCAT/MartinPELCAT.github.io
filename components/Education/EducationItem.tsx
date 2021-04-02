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
      <div>
        <div className="flex items-center space-x-3 mb-3">
          <img
            className="rounded-md bg-gray-50"
            src={props.schoolLogo}
            alt={`Logo de ${props.school}`}
            height={45}
            width={45}
          />
          <div className="font-semibold">{props.label}</div>
        </div>
      </div>
      <div className="flex space-x-1">
        <div className="text-sm font-light">{props.school} - </div>
        <div className="text-gray-600 text-sm font-light">
          {props.location.city}, {props.location.country}
        </div>
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

      {props.description && (
        <div className="my-3 text-sm">{props.description}</div>
      )}
      <FacebookItemFooter />
    </div>
  );
};
export default EducationItem;
