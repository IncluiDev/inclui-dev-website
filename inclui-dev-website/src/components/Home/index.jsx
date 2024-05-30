import './style.css'

import ImageHome from '../../assets/home-usuarios.png'
import Details1 from '../../assets/Details1.png'
import Details2 from '../../assets/Details2.png'
import blocosCenter from '../../assets/chao-blocos.png'
import blocoMais from '../../assets/mais-roxo.png'
import { CircleChevronDown } from 'lucide-react';


export default function Home() {
    return( 
        <>
        
        <section className="home">
       
             <div className='titulos'>
                <h1> <span id='tituloS'>Sociedade Justa,</span><br /> Tecnologia que <span id='spanI'>I</span><span id='spanN'>n</span><span id='spanC'>c</span><span id='spanI'>l</span><span id='spanN'>u</span><span id='spanC'>i</span><span id='spanM'>+</span></h1>
                <p id='subtitulo'> Juntos, podemos construir um futuro onde todos  <br /> tenham acesso igualitário às oportunidades e ao progresso. </p>

                <img className='Details1' src={Details1}/>
                <img className='Details2' src={Details2} />
                <img className='HomeImage' src={ImageHome} />


                    <img className='blocoMais' src={blocoMais} />
                    <img className='CenterBlocos' src={blocosCenter} />
                    
                    <a className='saibaMais' href="/">  <span id='saiba'>SAIBA MAIS <CircleChevronDown id='circleDown' size={45} color="white" weight="bold"/> </span> 
                    
    
                    </a>
            </div>
 
        </section> 
      

</>
    )
}