import './style.css';
import { FaPlay } from "react-icons/fa";
import blocos from '../../assets/chao-blocos.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Progresso } from '../../helpers/service/Progresso';

const CabecalhoCurso = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function handleClick() {
    try{
      if(!await Progresso.check(props.id)) 
        await Progresso.saveProgresso(props.id);
    } catch(ignored) {}

    navigate(`/curso?id=${props.id}&aula=0`);
  };

  return (
    <div className='cabecalho-curso-main'>
      <motion.img 
        src={blocos} 
        className='blocos-introducao'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      />
      
      <div className='container-cabecalho-curso'>
        <button className='continuar-curso' onClick={handleClick}>
          {t("detalhamento-button-continuar-curso")} <FaPlay />
        </button>
      </div>
    </div>
  );
}

export default CabecalhoCurso;
