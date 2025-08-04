import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { useContext } from 'react';
import { ScrollContext } from '../App';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { scrollToFooter } = useContext(ScrollContext);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 770);
        };

        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const contactUsToggle = () => {
        setIsOpen(false);
        scrollToFooter();
    }

    const isLoggedIn = sessionStorage.getItem("credential") || sessionStorage.getItem("admin");

    return (
        <header>
            <nav className='navbar'>
                <Link to="/"><img src={logo} alt="Peridot Logo" className='img-logo' /></Link>

                {isMobile && (
                    <button className='menu-toggle' onClick={toggleMenu}>
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                )}

                <ul className={`nav-menu ${isMobile ? 'mobile' : ''} ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
                    <li><Link to="#" onClick={
                        (e) => {
                            e.preventDefault();
                            contactUsToggle();
                        }
                    }>Contact Us</Link></li>
                    <li><Link to="/booking" onClick={() => setIsOpen(false)}>Online Booking</Link></li>
                    {isLoggedIn && (<li><Link to="/booking-list" onClick={() => setIsOpen(false)}>Booking List</Link></li>)}
                </ul>
            </nav>
        </header>
    );
}

export default Header;