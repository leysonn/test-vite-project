import './ProjectSection.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectsList } from '../../helpers/projectsList';

function ProjectSection() {
    return (
        <section id="projects">
            <div className="container">
                <div className="projects-content">
                    <span className="subtitle">Best Project of the Years</span>
                    <h2 className="title">Our recent projects</h2>
                    <ul className="card-container">
                        {projectsList.map(props => {
                            return <ProjectCard {...props} />;
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
