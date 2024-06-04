import './style.css';
import AboutCard from '../AboutCard';
import CardUser from '../../assets/card-comunidade.png';
import CardClass from '../../assets/card-estudo.png';
import CardGames from '../../assets/card-jogos.png';
import Dash2 from '../../assets/Dash2.png';
import Users from '../../assets/comunidade.png';
import Books from '../../assets/livros.png';
import Games from '../../assets/jogos.png';

import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation()

    return (
        <section id="about" className='about'>
            <img src={Dash2} className='dash' alt='dash'></img>

            <div className='grid-content'>
                <AboutCard 
                    icons={Users}
                    description={t("about-usuarios")}
                    image={CardUser}  />

                <AboutCard
                    icons={Books}
                    description={t("about-aulas")}
                    image={CardClass} />

                <AboutCard
                    icons={Games}
                    description={t("about-jogos")}
                    image={CardGames} />
            </div> 
        </section>
    );
}