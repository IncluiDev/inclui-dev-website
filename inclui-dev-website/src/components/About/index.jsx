import './style.css';
import AboutCard from '../AboutCard';
import CardUser from '../../assets/CardUser.png';
import CardClass from '../../assets/ClassCard.png';
import CardGames from '../../assets/CardGames.png';
import Dash2 from '../../assets/Dash2.png';
import Users from '../../assets/fa-users.png'
import Books from '../../assets/fa-books.png'
import Games from '../../assets/fa-games.png'

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