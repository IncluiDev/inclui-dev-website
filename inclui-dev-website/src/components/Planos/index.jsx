import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import PlanosCard from '../../components/PlanosCard';
import planoGratis from '../../assets/planoGratis.png';
import planoAnual from '../../assets/planoAnual.png';
import planoMensal from '../../assets/planoMensal.png';
import './style.css';

export default function Planos() {
    const planosData = [
        {
            title: 'Grátis',
            image: planoGratis,
            details: [
                { icon: faCheck, text: 'Acesso a Tutoriais', color: '#CA1BB4' },
                { icon: faCheck, text: 'Acesso Limitado aos Jogos', color: '#CA1BB4' },
                { icon: faCheck, text: 'Acesso Limitado aos Cursos', color: '#CA1BB4' },
                { icon: faXmark, text: 'Acesso a Aulas Extras', color: '#F76456' },
                { icon: faXmark, text: 'Conteúdo Exclusivo', color: '#F76456' },
            ],
        },
        {
            title: 'Mensal',
            image: planoMensal,
            details: [
                { icon: faCheck, text: 'Acesso a Tutoriais', color: '#CA1BB4' },
                { icon: faCheck, text: 'Acesso Ilimitado aos Jogos', color: '#CA1BB4' },
                { icon: faCheck, text: 'Acesso Ilimitado aos Cursos', color: '#CA1BB4' },
                { icon: faCheck, text: 'Acesso a Aulas Extras', color: '#CA1BB4' },
                { icon: faCheck, text: 'Conteúdo Exclusivo', color: '#CA1BB4' },
            ],
        },
        {
            title: 'Anual',
            image: planoAnual,
            details: [
                { icon: faCheck, text: 'Acesso a Tutoriais', color: '#CA1BB4' },
                { icon: faCheck, text: 'Acesso Ilimitado aos Jogos', color: '#CA1BB4' },
                { icon: faCheck, text: 'Acesso Ilimitado aos Cursos', color: '#CA1BB4' },
                { icon: faCheck, text: 'Acesso a Aulas Extras', color: '#CA1BB4' },
                { icon: faCheck, text: 'Conteúdo Exclusivo', color: '#CA1BB4' },
            ],
        },
    ];

    return (
        <section className="Planos" id='planos'>
            <div className="titulo-e-paragrafo">
                <h3>Nossos Planos</h3>
                <p>Escolha o plano que melhor se adapta às suas necessidades e <br></br>aproveite ao máximo nossos serviços.</p>
            </div>
            
            <div className="cartoes">
                {planosData.map((plano, index) => (
                    <PlanosCard key={index} title={plano.title} details={plano.details} image={plano.image} />
                ))}
            </div>
        </section>
    );
}