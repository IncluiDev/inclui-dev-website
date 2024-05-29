import './style.css'

export default function AboutCard(props) {

    return(

        <div className='card'>
            <img src={props.image} alt="Representação do app" />
            <div className='centerCard'>
                <img src={props.icons} className='icons'/>
                <p> { props.description } </p>
            </div>
        </div>
    )
}