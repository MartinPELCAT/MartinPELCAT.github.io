import React, { createContext, FC, useState } from "react";

export type Locale = "fr" | "en";

export type LanguageContextProps = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  //   t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextProps>(undefined);

export const LanguageContextProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("fr");

  //   const [file, setFile] = useState(
  //     async () => await import(`../public/i18n/${locale}`)
  //   );

  const translate = (key: string): string => {
    // console.log(file);
    console.log(key);

    return "test";
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};
