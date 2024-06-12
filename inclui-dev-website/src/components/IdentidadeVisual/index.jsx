import './style.css'
import imgApoio from '../../assets/imgApoio.png';
import imgInclusao from '../../assets/imgInclusao.png';
import imgProgramacao from '../../assets/imgProgramacao.png';
import IdentidadeLogo from '../IdentidadeLogo';
import gridLogo from '../../assets/logo-grid.png';

import { useTranslation } from 'react-i18next'

export default function IdentidadeVisual() {
    const { t } = useTranslation()

    return(
        <section className="IdentidadeVisual">
          <article className='identidade-caracteristicas'>
          <h3 className='title-identidade'>{t("identidade-titulo")}</h3>

            <div className='logoGridMarca'>
              <div className='identidade-grid'>
                <div className='identidade-column'>
                  <IdentidadeLogo 
                    images = {imgApoio}
                    meaning = {t("identidade-apoio")}
                    text = {t("identidade-apoio-significado")}/>

                  <IdentidadeLogo 
                    images = {imgInclusao}
                    meaning = {t("identidade-inclusao")}
                    text = {t("identidade-inclusao-significado")}
                    id='inclusaoLogo' />

                  <IdentidadeLogo 
                    images = {imgProgramacao}
                    meaning = {t("identidade-programacao")}
                    text = {t("identidade-programacao-significado")}
                    mineText = 'textMinu'/>
                </div>
                <img src={gridLogo} className='gridLogo'/>              
              </div>
            </div>
          </article>
        
          <article className='article-tipografia'>
            <h3 className='title-identidade'>{t("tipografia-titulo")}</h3>

            <div className='section-tipografia'>
              <div className='tipografia' id='fontAnybody'>
                <h3>Anybody</h3>  
                <p>0 01 02 03 04 05 06 07 08 09 10</p>
                <p>Ab Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                <p>{t("tipografia-anybody-descricao")}</p>
              </div>

              <div className='tipografia' id='fontJasmin'>
                <h3>Jasmin Regular</h3>
                <p>0 01 02 03 04 05 06 07 08 09 10</p>
                <p>Ab Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                <p>{t("tipografia-jasmin-descricao")}</p>
              </div>
            </div>
          </article>
        </section>
    )
}
