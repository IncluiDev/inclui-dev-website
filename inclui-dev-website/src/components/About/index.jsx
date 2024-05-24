import './style.css';
import AboutCard from '../AboutCard';
import CardUser from '../../assets/CardUser.png';
import CardClass from '../../assets/ClassCard.png';
import CardGames from '../../assets/CardGames.png';
import Dash2 from '../../assets/Dash2.png';

export default function About() {

    return (
        <section id="about" className='about'>
            <img src={Dash2} className='dash'></img>

            <div className='grid-content'>
                <AboutCard 
                    description="USUÁRIOS"
                    image={CardUser}  />

                <AboutCard
                    description="AULAS"
                    image={CardClass} />

        
                <AboutCard
                    description="JOGOS"
                    image={CardGames} />

            </div> 
        </section>
    )
}