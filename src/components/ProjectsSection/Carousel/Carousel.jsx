import './Carousel.scss';
import { projectsList } from '../../../helpers/projectsList';
import ProjectCard from './ProjectCard/ProjectCard';

function Carousel({ currentIndex }) {
    return (
        <div className="carousel">
            <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 29.39}rem)` }}>
                {projectsList.map((props, index) => (
                    <ProjectCard {...props} />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
