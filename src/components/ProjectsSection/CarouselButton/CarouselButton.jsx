import './CarouselButton.scss';

function CarouselButton({ icons, onClick, isActive }) {
    return (
        <button className={`carousel-btn${isActive ? '-active' : ''}`} disabled={!isActive}>
            <img src={isActive ? icons.active : icons.default} alt="Button icon" onClick={onClick} draggable={false} />
        </button>
    );
}

export default CarouselButton;
