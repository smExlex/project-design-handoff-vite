import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//import mkTranslations from "./Translations/mk.json";
import noTranslations from "./translations/no.json";
//import seTranslations from "./Translations/se.json";
//import daTranslations from "./Translations/da.json";
import enTranslations from "./translations/en.json";
//import ptTranslations from "./Translations/pt.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  // se: {
  //   translation: seTranslations,
  // },
  no: {
    translation: noTranslations,
  },
  // da: {
  //   translation: daTranslations,
  // },
  // pt: {
  //   translation: ptTranslations,
  // },
  // mk: {
  //   translation: mkTranslations,
  // },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language (key)
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
