import './style.css';

import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header'

import { IoMdReturnLeft } from "react-icons/io";

import error from '../../assets/error.svg'

import { useTranslation } from 'react-i18next'

export default function ErrorPage() {
    const navigate = useNavigate();
    const { t } = useTranslation()

    function handleClick() {
        navigate(`/home`);
    }

    return (
       <div>
            <Header />

            <main className='error-container'>
                <img src={error} className='error-img'/>
                <p>Parece que algo não deu certo desta vez, você pode voltar ao início e tentar novamente.</p>

                <button onClick={handleClick} className='button-error'>
                    Voltar
                    <IoMdReturnLeft className='icon-error'/>
                </button>
            </main>
            <Footer />
       </div>
    );
}