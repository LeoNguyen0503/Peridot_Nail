import { FaFacebook,FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer(){


    return(
        <>
            <footer>
                <div className="footer-columns">
                    <div className="quick-link">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to = "/booking">Online Booking</Link></li>
                        </ul>
                        <ul className="social-media">
                            <li><Link><FaFacebook/></Link></li>
                            <li><Link><FaInstagram/></Link></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3>CONTACT US</h3>
                        <p>Tel: (506) 588-8614</p>
                        <p>Address: 20 Burbank Court, Moncton</p>
                    </div>
                    <div className="business-hours">
                        <h3>BUSINESS HOURS</h3>
                        <p>Mon - Fri: 10 a.m - 8 p.m</p>
                        <p>Saturday: 10 a.m - 8 p.m</p>
                        <p>Sunday: 10 a.m - 8 p.m</p>
                    </div> 
                </div>
                <hr />
                <p>&copy; {new Date().getFullYear()} Peridot Nails. All right reserved. Designed by
                    <a href="https://www.linkedin.com/in/leonguyen050304" target="_blank" rel="noopener noreferrer"> Leo Nguyen</a>
                </p>
            </footer>
        </>
    );
}

export default Footer