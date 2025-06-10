

function Footer(){


    return(
        <>
            <footer>
                <div className="footer-columns">
                    <div className="quick-link">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Online Booking</a></li>
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
                <p>&copy; {new Date().getFullYear()} Peridot Nails. All right reserved. Designed by Leo Nguyen</p>
            </footer>
        </>
    );
}

export default Footer