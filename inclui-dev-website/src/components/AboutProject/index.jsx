import './style.css'
import rectangles from '../../assets/retangulos-aplicativo.png'

import { useTranslation } from 'react-i18next'

export default function AboutProject() {
    const { t } = useTranslation()

    return(
        <section className="add" id='sobre'>
            <div className='add-content'>
                <h1 className="title" style={{color: '#CA1BB4'}}>{t("about-project-titulo")}</h1>

                <p id='paragrafo'>
                    {t("about-project-paragrafo-01")}
                    <br/><br/>
                    {t("about-project-paragrafo-02")}
                </p>
            </div>

            <img src={rectangles} id="img-about" alt="" />
        </section>
    )
}