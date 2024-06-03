import './style.css'

export default function Paleta(props){
    return(
        <div className='paleta-card'>
            <img src={props.image} />
            
            <p className='hexadecimal'> {props.hexadecimal} </p>
            <p> {props.name}</p>
        </div>
    )

}