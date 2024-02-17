import './AboutSection.scss';
import about_image from '../../assets/images/about.png';
import Button from '../Button/Button';

function AboutSection() {
    return (
        <section id="about">
            <div className="container">
                <div className="about-content">
                    <h2>We are a global, boutique real estate brokerage</h2>
                    <div className="about__container">
                        <article>
                            <h3>The transfer of real estate</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam
                                in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl
                                quis nisl justo.
                            </p>
                            <div className="button-container">
                                <Button color='black' text="Book Now!" width="9.75rem"/>
                                <Button text="Read More" width="9.75rem" />
                            </div>
                            <div className="container">
                                <div className="text-container">
                                    <span className="bold">12+</span>
                                    <span>Customers</span>
                                </div>
                                <div className="text-container">
                                    <span className="bold">14+</span>
                                    <span>Offices</span>
                                </div>
                                <div className="text-container">
                                    <span className="bold">10+</span>
                                    <span>Students</span>
                                </div>
                            </div>
                        </article>
                        <div className="image-container">
                            <img src={about_image} alt="About" />
                            <div className="gradient-overlay" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
