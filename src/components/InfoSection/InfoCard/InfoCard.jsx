import './InfoCard.scss'

function InfoCard({icon, title, description}) {
    return (
        <article className='info-card'>
            <img className="icon" src={icon} alt="Card icon" />
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
        </article>
    );
};

export default InfoCard;