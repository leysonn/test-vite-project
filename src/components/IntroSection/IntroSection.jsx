import main_house from '../../assets/images/main_house.png';
import Form from '../Form/Form';
import './IntroSection.scss';

function Intro_section() {
    return (
        <section id="intro">
            <div className="container">
                <div className="intro-content">
                    <div className="title_container">
                        <span className="welcome">Welcome to Realstate</span>
                        <h1 className="title">Manage Your Property</h1>
                        <p className="subtitle">Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>
                        <Form width="24.38rem" />
                    </div>
                    <img src={main_house} alt="House" />
                </div>
            </div>
        </section>
    );
}

export default Intro_section;
