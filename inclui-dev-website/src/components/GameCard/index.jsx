import { useNavigate } from "react-router-dom"

export default function GameCard(props) {
    const navigate = useNavigate("/catalogo");

    function handleClick() {
        navigate(props.redirect)
    }

    return (
        <article onClick={handleClick}>
            <img src={props.img}></img>
            <h3>{props.nome}</h3>
        </article>
    )
}