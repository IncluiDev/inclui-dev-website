import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlanosCard = ({ title, details, image }) => {
    return (
        <div className='card-planos'>
            <div className="card-header-planos">
                <img src={image} alt={title} />
                <h2>{title}</h2>
            </div>

            <div className="card-detail-plano">
                {details.map((detail, index) => (
                    <p key={index} className='detail-text'>
                        <FontAwesomeIcon icon={detail.icon} style={{ color: detail.color }} className='plano-icon'/> 
                        {detail.text}
                    </p>
                ))}
            </div>
            <button className='card-button'>ASSINAR</button>
        </div>
    );
};

export default PlanosCard;