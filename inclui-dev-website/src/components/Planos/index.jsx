import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

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
            title: t("planos-titulo-junior"),
            image: planoGratis,
            details: [
                { icon: FaCheck, text: t("planos-tutoriais"), color: '#CA1BB4' },
                { icon: FaCheck, text: t("planos-jogos-limitado"), color: '#CA1BB4' },
                { icon: FaXmark, text: t("planos-cursos"), color: '#F76456' },
                { icon: FaXmark, text: t("planos-aulas"), color: '#F76456' },
                { icon: FaXmark, text: t("planos-exclusivo"), color: '#F76456' },
            ],
        },
        {
            title: t("planos-titulo-pleno"),
            image: planoMensal,
            details: [
                { icon: FaCheck, text: t("planos-tutoriais"), color: '#CA1BB4' },
                { icon: FaCheck, text: t("planos-jogos"), color: '#CA1BB4' },
                { icon: FaCheck, text: t("planos-cursos"), color: '#CA1BB4' },
                { icon: FaCheck, text: t("planos-aulas"), color: '#CA1BB4' },
                { icon: FaXmark, text: t("planos-exclusivo"), color: '#F76456' },
            ],
        },
        {
            title: t("planos-titulo-senior"),
            image: planoAnual,
            details: [
                { icon: FaCheck, text: t("planos-tutoriais"), color: '#CA1BB4' },
                { icon: FaCheck, text: t("planos-jogos"), color: '#CA1BB4' },
                { icon: FaCheck, text: t("planos-cursos"), color: '#CA1BB4' },
                { icon: FaCheck, text: t("planos-aulas"), color: '#CA1BB4' },
                { icon: FaCheck, text: t("planos-exclusivo"), color: '#CA1BB4' },
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