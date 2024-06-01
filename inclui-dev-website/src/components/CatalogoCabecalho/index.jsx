import './style.css';
import blocosCentro from '../../assets/chao-blocos.png';

export default function CatalogoCabecalho() {
    return (
        <div className="container">
            <div className='container-info'>
                <section className="foto">
                    <div className='container-foto'>
                        <div className='fundo-container'>
                            <h2>Nossos Cursos</h2>
                        </div>
                    </div>
                </section>

                <section className="texto">
                    <div className="container-texto">
                        <h1>Tecnologia que <span id='spanI'>I</span><span id='spanN'>n</span><span id='spanC'>c</span><span id='spanI'>l</span><span id='spanN'>u</span><span id='spanC'>i</span><span id='spanM'>+</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nemo! Est error voluptatum eos asperiores perferendis vel, dignissimos vero delectus accusantium fugiat? Quis quisquam saepe excepturi assumenda atque quae eius.</p>
                        <button className='button-saiba-mais'>Saiba mais</button>
                    </div>
                </section>
                
            </div>
            
            <div className='blocos'>
                <img src={blocosCentro} alt="blocosCentro"/>
            </div>
        </div>
    )
}