import StarRating from '../../../StarRating/StarRating';
import './ProjectCard.scss';

function ProjectCard({ house_image, title, description, rating }) {
    return (
        <div className="project-card">
            <div className="image-container">
                <img src={house_image} alt="House image" />
                <div className="gradient-overlay" />
            </div>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <StarRating rating={rating} />
        </div>
    );
}

export default ProjectCard;
