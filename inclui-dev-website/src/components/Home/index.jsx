import './style.css';
import ImageHome from '../../assets/home-usuarios.png';
import Details1 from '../../assets/Details1.png';
import Details2 from '../../assets/Details2.png';
import blocosCenter from '../../assets/chao-blocos.png';
import blocoMais from '../../assets/mais-roxo.png';
import { CircleChevronDown } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Home() {
    const { t } = useTranslation();

    return (
        <section className="home">
            <div className='titulos'>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <span id='tituloS'>{t("home-titulo-01")}</span><br /> {t("home-titulo-02")} 
                    <span id='spanI'>I</span>
                    <span id='spanN'>n</span>
                    <span id='spanC'>c</span>
                    <span id='spanL'>l</span>
                    <span id='spanN'>u</span>
                    <span id='spanC'>i</span>
                    <span id='spanM'>+</span>
                </motion.h1>

                <motion.p
                    id='subtitulo'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    {t("home-subtitulo-01")}  <br /> {t("home-subtitulo-02")}
                </motion.p>

                <motion.img 
                    className='Details1'
                    src={Details1}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
                />

                <motion.img 
                    className='Details2'
                    src={Details2}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
                />

                <motion.img 
                    className='HomeImage'
                    src={ImageHome}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
                />

                <motion.img 
                    className='blocoMais'
                    src={blocoMais}
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                />

                <motion.img 
                    className='CenterBlocos'
                    src={blocosCenter}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                />
                
                <motion.a 
                    className='saibaMais'
                    href="/home#sobre"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1.2, ease: 'easeOut' }}
                >
                    <span id='saiba'>
                        {t("home-saiba-mais")} 
                        <CircleChevronDown id='circleDown' size={45} color="white" weight="bold"/>
                    </span>
                </motion.a>
            </div>
        </section>
    );
}