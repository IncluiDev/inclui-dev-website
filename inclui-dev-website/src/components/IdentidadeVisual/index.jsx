import './style.css'
import incluiLogoDev from '../../assets/incluiDevLogo.png';
import incluiLogoDev2 from '../../assets/inclui-dev-logo.png';
import incluiDevGrid from '../../assets/logo-grid-elementos.png';
import Line2 from '../../assets/line2.png';
import imgApoio from '../../assets/identidade-logo-01.png';
import imgInclusao from '../../assets/imgInclusao.png';
import imgProgramacao from '../../assets/imgProgramacao.png';
import IdentidadeLogo from '../IdentidadeLogo';
import gridLogo from '../../assets/logo-grid.png';
import line3 from '../../assets/line3.png';

export default function IdentidadeVisual() {

    return(
        <section className="IdentidadeVisual">
          <div className='logoMarca'>
            <img src={incluiLogoDev} className='imgIncluiDev'/>
          </div>

          <article className='identidade-caracteristicas'>
            <div className='logoGridMarca'>
              <div className='header-identidade'>
                <img src={incluiLogoDev2} className='imgIncluiDev2'/>
                <h3>LOGO MARCA</h3>
                <img src={Line2} className='line2'  />
              </div>

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
            </div>

            <div className='logoGrid'>
                <div className='header-identidade'>
                  <img src={incluiDevGrid} className='imgGrid'/> 
                  <h3>LOGO GRID SYSTEM</h3>
                  <img src={Line2} className='line2'  />
                </div>

                <img src={gridLogo} className='gridLogo'/>
            </div>
          </article>
        
        <article className='article-tipografia'>
          <div className='header-identidade'>
              <h3 className='tipoName'>TIPOGRAFIA DA LOGO</h3>
              <img src={line3} className='line3'/>
          </div>

          <div>
            <div className='tipografia'>
              <h3>Anybody</h3>
              <h6>Jasmin Regular</h6>
              <p>A Jazmin Regular é uma fonte moderna e elegante, com formas arredondadas e suaves, ideal para transmitir uma imagem amigável.</p>
            </div>

            <div className='tipografia'>
              <p>Ab Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
              <h5>0 01 02 03 04 05 06 07 08 09 10</h5>
              <p id='fontAnybody'>A AnyBody é uma fonte moderna e versátil, com um estilo amigável e contemporâneo.</p>
            </div>
          </div>
        </article>
        </section>
    )
}
