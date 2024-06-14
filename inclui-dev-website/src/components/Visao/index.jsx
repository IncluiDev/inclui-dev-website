import './style.css';

import ods10 from '../../assets/ods/ods-10.png';
import ods4 from '../../assets/ods/ods-4.png';

import { useTranslation } from 'react-i18next';

export default function Visao() {
    const { t } = useTranslation();

    return (
        <section id="visao" className='visao-container'>
            <article>
                <img src={ods10} />
            </article>

            <article>
                <img src={ods4} />
            </article>
        </section>
    );
}