import { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

import imgEn from '../../assets/bandeiras/bandeira-en.png';
import imgPtBR from '../../assets/bandeiras/bandeira-ptBR.png';
import imgEs from '../../assets/bandeiras/bandeira-es.png';
import imgJa from '../../assets/bandeiras/bandeira-ja.png';
import imgFr from '../../assets/bandeiras/bandeira-fr.png';
import imgKo from '../../assets/bandeiras/bandeira-ko.png';
import imgRu from '../../assets/bandeiras/bandeira-ru.png';
import imgDe from '../../assets/bandeiras/bandeira-de.png';

const options = [
  {
    name: "Português",
    value: "pt",
    flag: imgPtBR
  },
  {
    name: "Inglês",
    value: "en",
    flag: imgEn
  },
  {
    name: "Espanhol",
    value: "es",
    flag: imgEs
  },
  {
    name: "Japonês",
    value: "ja",
    flag: imgJa
  },
  {
    name: "Francês",
    value: "fr",
    flag: imgFr
  },
  {
    name: "Russo",
    value: "ru",
    flag: imgRu
  },
  {
    name: "Alemão",
    value: "de",
    flag: imgDe
  },
  {
    name: "Coreano",
    value: "ko",
    flag: imgKo
  },
];

export default function SwitchLanguage() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.value);
  };

  return (
    <div className='switch-language'>
      <div className='custom-select'>
        <div className='selected-option'>
          <img src={selectedLanguage.flag} alt={selectedLanguage.name} />
        </div>

        <ul className='options'>
          {options.map(language => (
            <li 
              key={language.value} 
              onClick={() => handleLanguageChange(language)}
              className='option'
            >
              <div className='option-container'>
                <img src={language.flag} alt={language.name} />
                {language.name}
              </div>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
}
