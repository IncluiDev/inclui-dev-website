import './style.css';
import rectangles from '../../assets/retangulos-aplicativo.png';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function AboutProject() {
    const { t } = useTranslation();

    return (
        <section className="add" id='sobre'>
            <div className='add-content'>
                <motion.h1 
                    className="title" 
                    style={{ color: '#CA1BB4' }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {t("about-project-titulo")}
                </motion.h1>

                <motion.p 
                    id='paragrafo'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {t("about-project-paragrafo-01")}
                    <br /><br />
                    {t("about-project-paragrafo-02")}
                </motion.p>
            </div>

            <motion.img 
                src={rectangles} 
                id="img-about" 
                alt=""
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
            />
        </section>
    );
}