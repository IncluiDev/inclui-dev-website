import './style.css'
import add from '../../assets/imgAbout.png'
import rectangles from '../../assets/rectangles.png'
import { CircleChevronDown } from 'lucide-react';


export default function Add() {

    return(

        <section className="add">
            <div>
            <span className="strong"> SOBRE NÓS</span>
                <h1 className="title"> SOBRE NÓS</h1>
                <p>Somos uma plataforma educacional contendo jogos, dinâmicas e cursos voltados para auxiliar no desenvolvimento de pessoas com deficiências que queiram ingressar no mercado tecnológico, equiparada com ferramentas didáticas e comunicação constante durante o processo lúdico. </p>
                <p id='paragrafo'>Com o objetivo de garantir que todas as pessoas tenham acesso igualitário a oportunidades, recursos e participação no mercado tecnológico, não somente incluindo, mas tornando-as pertencentes, buscamos promover a inclusão ativa e a diversidade como pilares fundamentais da nossa missão. </p>
               
               <img src={rectangles} id="imgAbout" alt="" />
          

            </div>
            

        </section>
      
        
    )
}

//     <a className='btn' href="/"> <span id='saiba'>LOGO VISUAL <CircleChevronDown id='circleDown' size={40} color="white" weight="bold"/> </span> </a>