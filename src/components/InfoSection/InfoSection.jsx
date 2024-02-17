import './InfoSection.scss';
import InfoCard from './InfoCard/InfoCard';
import { infoList } from '../../helpers/infoList';

function InfoSection() {
    return (
        <section id="info">
            <div className="container">
                <div className="info-content">
                    <span className="subtitle">Three steps. Three minutes.</span>
                    <h2 className="title">Everything should be this easy.</h2>
                    <div className="card-container">
                        {infoList.map(props => {
                            return <InfoCard {...props} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoSection;
