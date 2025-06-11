import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Header(){


    return (
        <>
            <header>
                <nav className='navbar'>
                    <ul>
                        <img src={logo} alt="Peridot Logo" className='img-logo'/>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/booking">Online Booking</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header