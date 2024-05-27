import { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

import imgEn from '../../assets/bandeiras/bandeira-en.png';
import imgPtBR from '../../assets/bandeiras/bandeira-ptBR.png';

const options = [
  {
    name: "Portugues",
    value: "pt",
    flag: imgPtBR
  },
  {
    name: "Ingles",
    value: "en",
    flag: imgEn
  }
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
              <img src={language.flag} alt={language.name} /> {language.name}
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
}
