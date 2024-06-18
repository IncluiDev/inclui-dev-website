import './style.css';
import LunnaFundo from '../../assets/LunnaFundo2.png';
import CMprojetados from '../../assets/CMprojetados4.png';
import ParceirosCard from '../../components/ParceirosCard';

const parceirosData = [
  {
    image: CMprojetados,
    title: 'CMprojetados',
    description: 'Móveis sob medida para um lar aconchegante e estofados higienizados para um lar saudável!',
    link: 'https://www.instagram.com/cmprojetados/',
    buttonId: 'button-cm'
  },
  {
    image: LunnaFundo,
    title: 'Lunna Companny',
    description: 'Acompanhe seu filho na creche com tranquilidade: plataforma conecta pais à rotina e desenvolvimento da criança.',
    link: 'https://linktr.ee/lunnacompany'
  }
];

export default function Parceiros() {
  return (
    <section className='Parceiros'>
      <h3 className="parceiros-title">EMPRESAS PARCEIRAS</h3>
      <div className="parceiros-container">
        {parceirosData.map((parceiro, index) => (
          <ParceirosCard key={index} parceiro={parceiro} />
        ))}
      </div>
    </section>
  );
}
