import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json';
import translationVI from '../locales/vi/translation.json';

// the translations
const resources = {
    vi: {
        translation: translationVI
    },
    en: {
        translation: translationEN
    }
    
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'vi', //default language
        resources,
        fallbackLng: 'en', // translation
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;

