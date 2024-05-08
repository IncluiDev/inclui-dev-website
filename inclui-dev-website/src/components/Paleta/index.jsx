import './style.css'

export default function Paleta(props){
    return(

        <div className='cardizin'>
            <h2>{props.subtitle}</h2>
            <img src={props.image} />
            <p> {props.hexadecimal} </p>
            <p> {props.name}</p>
        </div>
    )

}