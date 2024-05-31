import './style.css'

export default function IdentidadeLogo({images, meaning, text, id, mineText}) {
    return(
        <div className='logoContainer'>
          <div className='header-logo'>
            <img src={images} className='logoImage' alt={meaning} id={id} />
            <h3>{meaning}</h3>
          </div>
          
          <p id={mineText}>{text}</p>
        </div>
    )
}