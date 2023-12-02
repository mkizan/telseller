import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "./locales/en/translation.json";
import translationUk from "./locales/uk/translation.json";

export const defaultNS = "ns";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        ns: translationEn,
      },
      uk: {
        ns: translationUk,
      },
    },
    interpolation: {
      escapeValue: false, //safes from xss
    },
  });

export default i18n;
