import './style.css';
import bloquinhoCenter from '../../assets/chao-blocos.png';
import VerdeCor from '../../assets/identidade-cor-verde.png';
import roxoCor from '../../assets/identidade-cor-roxo.png';
import LaranjaCor from '../../assets/identidade-cor-laranja.png';
import AzulCor from '../../assets/identidade-cor-azul.png';
import Paleta from '../Paleta/index';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function PaletaCard() {
  const { t } = useTranslation();

  return (
    <section className='PaletaCard' id='identidade'>
      <motion.img 
        src={bloquinhoCenter} 
        className='bloquinhoCenter'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      />

      <h2 className='paleta-title'>{t("paleta-card-titulo")}</h2>

      <motion.div 
        className='grid-card'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <Paleta 
            image={LaranjaCor} 
            hexadecimal={t("paleta-card-laranja")}
            name={t("paleta-card-laranja-significado")} 
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <Paleta 
            image={roxoCor}
            hexadecimal={t("paleta-card-roxo")}
            name={t("paleta-card-roxo-significado")} 
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <Paleta 
            image={VerdeCor}
            hexadecimal={t("paleta-card-verde")}
            name={t("paleta-card-verde-significado")} 
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <Paleta 
            image={AzulCor}
            hexadecimal={t("paleta-card-azul")}
            name={t("paleta-card-azul-significado")} 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}