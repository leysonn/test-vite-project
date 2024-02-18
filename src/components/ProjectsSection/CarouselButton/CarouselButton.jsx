import './CarouselButton.scss';

function CarouselButton({ icons, onClick, isActive }) {
    return (
        <button className="carousel-btn" onClick={onClick} disabled={!isActive}>
            <img src={isActive ? icons.active : icons.default} alt="Button icon" className="carousel-btn-img" draggable={false} />
        </button>
    );
}

export default CarouselButton;
