import './style.css';
import AboutCard from '../AboutCard';
import CardUser from '../../assets/card-comunidade.png';
import CardClass from '../../assets/card-estudo.png';
import CardGames from '../../assets/card-jogos.png';
import Dash2 from '../../assets/Dash2.png';
import Users from '../../assets/comunidade.png'
import Books from '../../assets/livros.png'
import Games from '../../assets/jogos.png'

export default function About() {

    return (
        <section id="about" className='about'>
            <img src={Dash2} className='dash'></img>

            <div className='grid-content'>
                <AboutCard 
                    icons={Users}
                    description="USUÁRIOS"
                    image={CardUser}  />

                <AboutCard
                    icons={Books}
                    description="AULAS"
                    image={CardClass} />

        
                <AboutCard
                    icons={Games}
                    description="JOGOS"
                    image={CardGames} />

            </div> 
        </section>
    )
}