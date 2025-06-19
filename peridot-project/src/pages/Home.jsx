import p1 from'../assets/placeholder/p1.jpg'
import p2 from'../assets/placeholder/p2.jpg'
import p3 from'../assets/placeholder/p3.jpg'
import {useEffect} from 'react'
import ImageCarousel from '../components/ImageCarousel.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import {Link} from 'react-router-dom'


function Home(){

    useEffect(() => {
        document.title = "Peridot Nails - Home";
    },[])


    return (
        <section className="home-container">
            <div className="image-container">
                <Link to="/booking">
                    <button>Booking Appointment</button>
                </Link>
                <Link to="/services">
                    <button>Services</button>
                </Link>
                <div className="tel-container">
                    <p className="tel">Tel: (506) 588-5350</p>
                    <p className="address">20 Burbank Court, Moncton</p>
                </div>
            </div>
            <h2 className="home-title">Collections</h2>
            <ImageCarousel images={[p1, p2, p3]} />
            <h2 className="home-title">Our Services</h2>
            <div className="card-container">
                <div className="card">
                    <Link to="/services"><ServiceCard image={p1} name="Pedicure"/></Link>
                    <Link to="/services"><ServiceCard image={p2} name="Manicure"/></Link>
                    <Link to="/services"><ServiceCard image={p3} name="Kids 11 and Under"/></Link>
                </div>
                <div className="button-container">
                    <Link to="/services">
                        <button className="service-button">More Services</button>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Home