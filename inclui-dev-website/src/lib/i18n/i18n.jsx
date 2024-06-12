import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptBR from './locale/ptBR.json'
import en from './locale/en.json'
import es from './locale/es.json'
import ja from './locale/ja.json'
import fr from './locale/fr.json'
import ru from './locale/ru.json'
import de from './locale/de.json'
import ko from './locale/ko.json'
import zh from './locale/zh.json'
import ar from './locale/ar.json'

i18n.use(initReactI18next).init({
    fallbackLng: "ptBR",
    interpolation: false,
    resources: {
        ptBR: {
            ...ptBR
        },
        en: {
            ...en
        },
        es: {
            ...es
        },
        ja: {
            ...ja
        },
        fr: {
            ...fr
        },
        ru: {
            ...ru
        },
        de: {
            ...de
        },
        ko: {
            ...ko
        },
        zh: {
            ...zh
        },
        ar: {
            ...ar
        }
    },
})