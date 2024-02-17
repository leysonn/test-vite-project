import './Navbar.scss';
import logo from '../../assets/images/logo.svg';
import search_icon from '../../assets/icons/search.svg';
import Button from '../Button/Button';

function Navbar() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <img src={logo} alt="Logo" className="logo" />
                    <div className="container">
                        <nav className="menu container">
                            <ul className="container">
                                <li>
                                    <a href="#info">About us</a>
                                </li>
                                <li>
                                    <a href="#projects">Projects</a>
                                </li>
                                <li>
                                    <a href="#about">Agents</a>
                                </li>
                                <li>
                                    <a href="#outro">Services</a>
                                </li>
                                <li>
                                    <a href="#outro">Listing</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img className="search-icon" src={search_icon} alt="Search" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <a className="other" href="#">
                            Other services
                        </a>
                        <Button text="Contact us" width="9.88rem"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
