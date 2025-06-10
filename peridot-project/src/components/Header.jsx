import logo from '../assets/logo.png'


function Header(){


    return (
        <>
            <header>
                <nav className='navbar'>
                    <ul>
                        <img src={logo} alt="Peridot Logo" className='img-logo'/>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Online Booking</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header