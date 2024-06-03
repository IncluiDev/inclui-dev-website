import './style.css'
import incluiLogoDev2 from '../../assets/incluiDevLogo2.png';
import incluiDevGrid from '../../assets/logo-grid-elementos.png';
import imgApoio from '../../assets/imgApoio.png';
import imgInclusao from '../../assets/imgInclusao.png';
import imgProgramacao from '../../assets/imgProgramacao.png';
import IdentidadeLogo from '../IdentidadeLogo';
import gridLogo from '../../assets/logo-grid.png';

export default function IdentidadeVisual() {

    return(
        <section className="IdentidadeVisual">
          <article className='identidade-caracteristicas'>
          <h3 className='title-identidade'>COMPOSIÇÃO DE LOGO</h3>

            <div className='logoGridMarca'>
              <div className='identidade-grid'>
                <div className='identidade-column'>
                  <IdentidadeLogo 
                    images = {imgApoio}
                    meaning = 'APOIO'
                    text = 'As mãos simbolizam a solidariedade e também a união em torno de um propósito comum.'/>

                  <IdentidadeLogo 
                    images = {imgInclusao}
                    meaning = 'INCLUSÃO SOCIAL'
                    text = 'Simbolizando a união e o apoio mútuo entre as pessoas, independentemente de suas diferenças.'
                    id='inclusaoLogo' />

                  <IdentidadeLogo 
                    images = {imgProgramacao}
                    meaning = 'PROGRAMAÇÃO'
                    text = 'Simboliza o foco da marca na programação e tecnologia.'
                    id='programacaoLogo'
                    mineText = 'textMinu'/>
                </div>
                <img src={gridLogo} className='gridLogo'/>              
              </div>
            </div>
          </article>
        
        <article className='article-tipografia'>
        <h3 className='title-identidade'>TIPOGRAFIA DA LOGO</h3>

          <div className='section-tipografia'>
            <div className='tipografia' id='fontAnybody'>
              <h3>Anybody</h3>  
              <p>0 01 02 03 04 05 06 07 08 09 10</p>
              <p>Ab Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
              <p>A AnyBody é uma fonte moderna e versátil, com um estilo amigável e contemporâneo.</p>
            </div>

            <div className='tipografia' id='fontJasmin'>
              <h3>Jasmin Regular</h3>
              <p>0 01 02 03 04 05 06 07 08 09 10</p>
              <p>Ab Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
              <p>A Jazmin Regular é uma fonte moderna e elegante, com formas arredondadas e suaves, ideal para transmitir uma imagem amigável.</p>
            </div>
          </div>
        </article>
        </section>
    )
}
