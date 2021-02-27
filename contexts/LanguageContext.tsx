import React, { createContext, FC, useEffect, useState } from "react";
import fr from "date-fns/locale/fr";
import enUS from "date-fns/locale/en-US";
import { Locale as DateLocale } from "date-fns";

export type Locale = "fr" | "en";

export type LanguageContextProps = {
  locale: Locale;
  dateLocale: DateLocale;
  setLocale: React.Dispatch<React.SetStateAction<Locale>>;
  t: (key: string) => string;
};

const config: {
  [key in Locale]: { files: NodeRequire | NodeRequire[]; date: DateLocale };
} = {
  fr: {
    files: [
      require("../public/i18n/fr"),
      require("../public/i18n/fr/date.json"),
      require("../public/i18n/fr/experience.json"),
    ],
    date: fr,
  },
  en: {
    files: [
      require("../public/i18n/en"),
      require("../public/i18n/en/date.json"),
      require("../public/i18n/en/experience.json"),
    ],
    date: enUS,
  },
};

export const LanguageContext = createContext<LanguageContextProps>(undefined);

export const LanguageContextProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("fr");
  const [dateLocale, setDateLocale] = useState<DateLocale>(
    config[locale]["date"]
  );

  const mergeFiles = () => {
    const allFiles = config[locale]["files"];
    if (Array.isArray(allFiles)) {
      return allFiles.reduce((a, b) => {
        return { ...a, ...b };
      }, {});
    } else {
      return allFiles;
    }
  };

  const [datas, setDatas] = useState(mergeFiles);

  useEffect(() => {
    const filesDatas = mergeFiles();
    setDatas(filesDatas);
    setDateLocale(config[locale]["date"]);
  }, [locale]);

  useEffect(() => {
    const navLanguage = navigator.language.slice(0, 2) as Locale;
    if (Object.keys(config).includes(navLanguage)) {
      setLocale(navLanguage); // french first
    }
  }, []);

  const translate = (key: string): string => {
    return datas[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translate, dateLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
