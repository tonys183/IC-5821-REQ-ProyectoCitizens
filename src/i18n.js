import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  .init({
    debug: true, // Set to false in production
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    backend: {
      // Path where resources get loaded from
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Cache user language on
      caches: ['localStorage'],
    },
  });

export default i18n; 