export default function Parceiro({ parceiro }) {
    const { image, title, description, link, buttonId } = parceiro;
    return (
        <div className="box-parceiros">
            <div className="parceiros-image" style={{ backgroundImage: `url(${image})` }}>
                <div className="content-parceiros">
                    <br></br>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <br/>
                    <br/>
                    <br/>
                    <a href={link} id={buttonId}>Saiba mais</a>
                </div>
            </div>
        </div>
    );
}