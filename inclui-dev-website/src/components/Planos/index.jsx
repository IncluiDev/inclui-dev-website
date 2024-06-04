import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import PlanosCard from '../../components/PlanosCard';
import planoGratis from '../../assets/planoGratis.png';
import planoAnual from '../../assets/planoAnual.png';
import planoMensal from '../../assets/planoMensal.png';

import './style.css';

import { useTranslation } from 'react-i18next'

export default function Planos() {
    const { t } = useTranslation()

    const planosData = [
        {
            title: t("planos-titulo-gratis"),
            image: planoGratis,
            details: [
                { icon: faCheck, text: t("planos-tutoriais"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-jogos-limitado"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-cursos-limitado"), color: '#CA1BB4' },
                { icon: faXmark, text: t("planos-aulas"), color: '#F76456' },
                { icon: faXmark, text: t("planos-exclusivo"), color: '#F76456' },
            ],
        },
        {
            title: t("planos-titulo-mensal"),
            image: planoMensal,
            details: [
                { icon: faCheck, text: t("planos-tutoriais"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-jogos"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-cursos"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-aulas"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-exclusivo"), color: '#CA1BB4' },
            ],
        },
        {
            title: t("planos-titulo-anual"),
            image: planoAnual,
            details: [
                { icon: faCheck, text: t("planos-tutoriais"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-jogos"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-cursos"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-aulas"), color: '#CA1BB4' },
                { icon: faCheck, text: t("planos-exclusivo"), color: '#CA1BB4' },
            ],
        },
    ];

    return (
        <section className="Planos" id='planos'>
            <div className="titulo-e-paragrafo">
                <h3>{t("planos-titulo")}</h3>
                <p>{t("planos-subtitulo-01")} <br></br>{t("planos-subtitulo-02")}</p>
            </div>
            
            <div className="cartoes">
                {planosData.map((plano, index) => (
                    <PlanosCard key={index} title={plano.title} details={plano.details} image={plano.image} button={t("planos-assinar")}/>
                ))}
            </div>
        </section>
    );
}