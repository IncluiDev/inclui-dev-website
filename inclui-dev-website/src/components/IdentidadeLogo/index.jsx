import './style.css'

export default function IdentidadeLogo({images, meaning, text, id, mineText}) {
    return(
        <div className='logoContainer'>
        <img src={images} className='logoImage' alt={meaning} id={id} />
        <h3>{meaning}</h3>
        <p id={mineText}>{text}</p>
      </div>
    )
}