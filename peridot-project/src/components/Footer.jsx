import { FaFacebook,FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {forwardRef} from "react";


const Footer = forwardRef((props, ref) => {


    return(
        <>
            <footer ref={ref}>
                <div className="footer-columns">
                    <div className="quick-link">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to = "/booking">Online Booking</Link></li>
                        </ul>
                        <ul className="social-media">
                            <li><a href="https://www.facebook.com/people/Peridot-Nail/61577093921464/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a></li>
                            <li><a><FaInstagram/></a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3>CONTACT US</h3>
                        <p>Tel: (506) 588-5350</p>
                        <p>Address: 20 Burbank Court, Moncton</p>
                        <p>Email: Peridotnailspa@gmail.com</p>
                    </div>
                    <div className="business-hours">
                        <h3>BUSINESS HOURS</h3>
                        <p>Mon - Sat: 9 a.m - 6 p.m</p>
                    </div> 
                </div>
                <hr />
                <p>&copy; {new Date().getFullYear()} Peridot Nails. All right reserved. Designed by
                    <a href="https://www.linkedin.com/in/leonguyen050304" target="_blank" rel="noopener noreferrer"> Leo Nguyen</a>
                </p>
            </footer>
        </>
    );
});

export default Footer