import './Button.scss';

function Button({ color = 'white', text, width, onClick }) {
    return (
        <button className={`button--${color}`} style={{ width }} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
