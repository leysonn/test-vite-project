import './StarRating.scss';
import star from '../../assets/icons/star.svg';
import star_filled from '../../assets/icons/star_filled.svg';

function StarRating({ rating }) {
    const stars = [];
    const roundedRating = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
        if (i < roundedRating) {
            stars.push(<img key={i} className="star" src={star_filled} alt="Filled rating star" />);
        } else {
            stars.push(<img key={i} className="star" src={star} alt="Rating star" />);
        }
    }

    return (
        <div className="star-rating">
            {stars}
            <span className="rating">{rating}</span>
        </div>
    );
}

export default StarRating;
