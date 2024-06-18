import './style.css';

import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header'

import { IoMdReturnLeft } from "react-icons/io";

import { useTranslation } from 'react-i18next'

export default function LGPDPage() {
    const navigate = useNavigate();
    const { t } = useTranslation()

    function handleClick() {
        navigate(`/home`);
    }

    return (
       <div>
            <Header />

            <main className='lgpd-container'>
                <h1>Permissão para Uso de Cookies e Coleta de Dados</h1>
                <p>Autorizo o uso de cookies neste site para a coleta e tratamento de informações de navegação, como páginas visitadas, tempo de permanência e cliques, bem como dados fornecidos voluntariamente através de formulários submetidos. Essas informações serão utilizadas para personalizar a experiência do usuário, realizar análises estatísticas e melhorar nossos serviços.</p>
                <p>Os dados coletados serão tratados em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e serão armazenados de forma segura. Você pode acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento, conforme descrito na nossa Política de Privacidade.</p>

                <h2>Política de Privacidade</h2>

                <h3>1. Coleta de Dados</h3>
                <p><i>Cookies:</i> Utilizamos cookies para coletar informações de navegação, como páginas visitadas, tempo de permanência e cliques. Cookies são pequenos arquivos de texto armazenados no seu dispositivo que ajudam a melhorar a experiência do usuário.</p>
                <p><i>Formulários:</i> Coletamos dados fornecidos voluntariamente por você através de formulários, como nome, endereço de e-mail e outras informações pertinentes.</p>

                <h3>2. Uso dos Dados</h3>
                <p><i>Personalização:</i> Os dados de navegação são usados para personalizar sua experiência no site.</p>
                <p><i>Análise Estatística:</i> Realizamos análises estatísticas para entender como os usuários interagem com nosso site e melhorar nossos serviços.</p>
                <p><i>Melhoria dos Serviços:</i> Utilizamos os dados coletados para aprimorar nossos serviços e funcionalidades do site.</p>

                <h3>3. Compartilhamento de Dados</h3>
                <p><i>Terceiros:</i> Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou para proteger nossos direitos.</p>

                <h3>4. Segurança dos Dados</h3>
                <p><i>Armazenamento:</i> Armazenamos seus dados de forma segura, adotando medidas técnicas e administrativas para protegê-los contra acessos não autorizados, perda ou destruição.</p>

                <h3>5. Seus Direitos</h3>
                <p><i>Acesso e Correção:</i> Você tem o direito de acessar seus dados pessoais e solicitar correções.</p>
                <p><i>Exclusão:</i> Você pode solicitar a exclusão de seus dados pessoais a qualquer momento.</p>
                <p><i>Revogação do Consentimento:</i> Você pode revogar seu consentimento para o uso de cookies a qualquer momento, ajustando as configurações do seu navegador.</p>

                <h3>6. Contato</h3>
                <p>Para exercer seus direitos ou se você tiver alguma dúvida sobre nossa política de privacidade, entre em contato conosco pelo e-mail: <a href="mailto:incluidev.org@gmail.com">incluidev.org@gmail.com</a>.</p>

                <button onClick={handleClick} className='button-error'>
                    Voltar
                    <IoMdReturnLeft className='icon-error'/>
                </button>
            </main>

            <Footer />
       </div>
    );
}