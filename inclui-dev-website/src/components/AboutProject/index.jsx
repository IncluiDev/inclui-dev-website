import './style.css'
import rectangles from '../../assets/retangulos-aplicativo.png'

export default function AboutProject() {
    return(
        <section className="add" id='sobre'>
            <div className='add-content'>
                <h1 className="title" style={{color: '#CA1BB4'}}>SOBRE NÓS</h1>

                <p id='paragrafo'>
                    Somos uma plataforma educacional contendo jogos, dinâmicas e cursos voltados para auxiliar no desenvolvimento de pessoas com deficiências que queiram aprender sobre tecnologia, equiparada com ferramentas didáticas e comunicação constante durante o processo lúdico.                     
                    <br/><br/>
                    Com o objetivo de garantir que todas as pessoas tenham acesso igualitário a oportunidades, recursos e participação no mercado tecnológico, não somente incluindo, mas tornando-as pertencentes.                </p>
            </div>

            <img src={rectangles} id="img-about" alt="" />
        </section>
    )
}