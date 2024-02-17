import second_house from '../../assets/images/second_house.png';
import Form from '../Form/Form';
import './OutroSection.scss';

function OutroSection() {
    return (
        <section id="outro">
            <div className="container">
                <div className="outro-content">
                    <div className="title-container">
                        <h1 className="title">Subscribe Our Newsletter</h1>
                        <p className="subtitle">
                            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in
                            senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
                        </p>
                        <Form width="29.31rem" />
                    </div>
                    <img src={second_house} />
                </div>
            </div>
        </section>
    );
}

export default OutroSection;
