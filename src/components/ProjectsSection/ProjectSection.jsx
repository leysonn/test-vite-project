import { useState } from 'react';
import { projectsList } from '../../helpers/projectsList';
import Carousel from './Carousel/Carousel';
import CarouselButton from './CarouselButton/CarouselButton';
import './ProjectSection.scss';
import prev_icon from '../../assets/icons/prev.svg';
import next_icon from '../../assets/icons/next.svg';
import prev_active_icon from '../../assets/icons/prev_active.svg';
import next_active_icon from '../../assets/icons/next_active.svg';

function ProjectSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function prevSlide() {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? projectsList.length - 1 : prevIndex - 1));
    }

    function nextSlide() {
        setCurrentIndex(prevIndex => (prevIndex === projectsList.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <section id="projects">
            <div className="container">
                <div className="projects-content">
                    <span className="subtitle">Best Project of the Years</span>
                    <div className="container">
                        <h2 className="title">Our recent projects</h2>
                        <div className="button_container">
                            <CarouselButton
                                icons={{ default: prev_icon, active: prev_active_icon }}
                                onClick={prevSlide}
                                isActive={currentIndex === 0 ? false : true}
                            />
                            <CarouselButton
                                icons={{ default: next_icon, active: next_active_icon }}
                                onClick={nextSlide}
                                isActive={currentIndex === projectsList.length / 2 - 1 ? false : true}
                            />
                        </div>
                    </div>
                    <Carousel currentIndex={currentIndex} />
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
