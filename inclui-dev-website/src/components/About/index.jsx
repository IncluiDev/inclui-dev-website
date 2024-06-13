import './style.css';

import AboutCard from '../AboutCard';
import CardUser from '../../assets/card-comunidade.png';
import CardClass from '../../assets/card-estudo.png';
import CardGames from '../../assets/card-jogos.png';
import Dash from '../../assets/dash.png';
import Users from '../../assets/comunidade.png';
import Books from '../../assets/livros.png';
import Games from '../../assets/jogos.png';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className='about'>
            <img src={Dash} className='dash' alt='dash'></img>

            <div className='grid-content'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <AboutCard 
                        icons={Users}
                        description={t("about-usuarios")}
                        image={CardUser} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <AboutCard
                        icons={Books}
                        description={t("about-aulas")}
                        image={CardClass} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <AboutCard
                        icons={Games}
                        description={t("about-jogos")}
                        image={CardGames} />
                </motion.div>
            </div> 
        </section>
    );
}