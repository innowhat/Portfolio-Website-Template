import React, { useState, useContext, useCallback, createContext } from "react";
import english from "../../translations/en.json";
import finnish from "../../translations/fi.json";
export const LanguageContext = createContext();
export const LanguageContextProvider = ({ children }) => {
  const [languageString, setLanguageString] = useState("en");
  const appData = languageString === "en" ? english : finnish;

  return (
    <LanguageContext.Provider
      value={{ languageString, setLanguageString, appData }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  const { languageString, setLanguageString } = context;
  const languageToggle = useCallback(() => {
    if (languageString === "fi") setLanguageString("en");
    else if (languageString === "en") setLanguageString("fi");
  }, [languageString, setLanguageString]);
  return {
    language: languageString,
    languageToggle
  };
}
