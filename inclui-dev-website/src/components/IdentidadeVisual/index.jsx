import './style.css'
import incluiLogoDev from '../../assets/incluiDevLogo.png';
import incluiLogoDev2 from '../../assets/inclui-dev-logo.png';
import incluiDevGrid from '../../assets/logo-grid-elementos.png';
import Line1 from '../../assets/line.png';
import Line2 from '../../assets/line2.png';
import imgApoio from '../../assets/identidade-logo-01.png';
import imgInclusao from '../../assets/imgInclusao.png';
import imgProgramacao from '../../assets/imgProgramacao.png';
import IdentidadeLogo from '../IdentidadeLogo';
import gridLogo from '../../assets/logo-grid.png';
import paneOrange1 from '../../assets/avioes-laranja.png';
import line3 from '../../assets/line3.png';

export default function IdentidadeVisual() {

    return(
        <section className="IdentidadeVisual">
          <div className='logoMarca'>
            <img src={incluiLogoDev} className='imgIncluiDev'/>
          </div>

          <aside className='logoGridMarca'>
            <img src={incluiLogoDev2} className='imgIncluiDev2'/>
            <h2>LOGO MARCA</h2>

            <img src={Line1} className='line1' />
            <img src={Line2} className='line2'  style={{visibility: 'hidden'}}/>

          <div>
   
      <IdentidadeLogo 
        images = {imgApoio}
        meaning = 'APOIO'
        text = 'As mãos simbolizam a solidariedade e também a união em torno de um propósito comum.'/>

      <IdentidadeLogo 
        images = {imgInclusao}
        meaning = 'INCLUSÃO SOCIAL'
        text = 'simbolizando a união e o apoio mútuo entre as pessoas, independentemente de suas diferenças.'
        id='inclusaoLogo' />

      <IdentidadeLogo 
        images = {imgProgramacao}
        meaning = 'PROGRAMAÇÃO'
        text = 'Simboliza o foco da marca na programação e tecnologia.'
        id='programacaoLogo'
        mineText = 'textMinu'/>


    </div>
  </aside>
      
        <div className='logoGrid'>
           <img src={incluiDevGrid} className='imgGrid'/> 
            <h3>LOGO GRID SYSTEM</h3>
            <img src={Line2} className='line2'  />

            <img src={gridLogo} className='gridLogo'/>
        </div>
            <img src={paneOrange1} className='paneOrange1' />
            <img src={paneOrange1} className='paneOrange2' />

            <h3 className='tipoName'>TIPOGRAFIA DA LOGO</h3>
            <img src={line3} className='line3'/>

        <div className='tipografias'>
          <h3>Anybody</h3>
          <h6>Jasmin Regular</h6>
          <p>A Jazmin Regular é uma fonte moderna e elegante, com formas arredondadas e suaves, ideal para transmitir uma imagem amigável.</p>
        </div>

        <div className='tipografiaB'>
          <p>Ab Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
          <h5>0 01 02 03 04 05 06 07 08 09 10</h5>
          <p id='fontAnybody'>A AnyBody é uma fonte moderna e versátil, com um estilo amigável e contemporâneo.</p>
        </div>

        </section>
      
        
    )
}
