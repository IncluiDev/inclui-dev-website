import './style.css'
import rectangles from '../../assets/retangulos-aplicativo.png'


export default function Add() {
    return(
        <section className="add">
            <div className='add-content'>
                <h1 className="title">SOBRE NÓS</h1>

                <p id='paragrafo'>
                    Somos uma plataforma educacional contendo jogos, dinâmicas e cursos voltados para auxiliar no desenvolvimento de pessoas com deficiências que queiram ingressar no mercado tecnológico, equiparada com ferramentas didáticas e comunicação constante durante o processo lúdico.
                    <br></br>
                
                    Com o objetivo de garantir que todas as pessoas tenham acesso igualitário a oportunidades, recursos e participação no mercado tecnológico, não somente incluindo, mas tornando-as pertencentes, buscamos promover a inclusão ativa e a diversidade como pilares fundamentais da nossa missão. 
                </p>
            </div>

            <img src={rectangles} id="imgAbout" alt="" />
        </section>
    )
}