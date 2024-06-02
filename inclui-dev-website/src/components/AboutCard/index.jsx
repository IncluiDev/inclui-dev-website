import './style.css'

export default function AboutCard(props) {

    return(

        <div className='card'>
            <img src={props.image} alt="Representação do app" />
            <div className='center-card'>
                <img src={props.icons} className='icons'/>
                <p> { props.description } </p>
            </div>
        </div>
    )
}