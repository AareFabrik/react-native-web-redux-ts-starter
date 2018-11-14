import i18n from "i18next";
import { DeviceInfo } from "react-native-web";

var de = require("./i18n_de.json");
var en = require("./i18n_en.json");

import the_terms from "./terms";

const fallbackLanguage = "en";
i18n.init({
  fallbackLng: fallbackLanguage,
  ns: [""],
  defaultNS: "",
  debug: process.env.NODE_ENV !== "production"
});
i18n.addResourceBundle("en", "", en, true, true);
i18n.addResourceBundle("de", "", de, true, true);

// first time change to DeviceLocale
if (DeviceInfo.locale !== fallbackLanguage) {
  i18n.changeLanguage(DeviceInfo.locale, (err, t) => {
    if (err) return console.log("something went wrong loading", err);
  });
}

export const Terms = the_terms;

export default i18n;
