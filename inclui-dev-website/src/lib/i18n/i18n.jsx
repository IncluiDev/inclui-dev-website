import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locale/en.json'
import ptBR from './locale/ptBR.json'

i18n.use(initReactI18next).init({
    fallbackLng: "ptBR",
    interpolation: false,
    resources: {
        en: {
            ...en
        },
        ptBR: {
            ...ptBR
        }
    },
})