import p1 from'../assets/nails/1e4563fa-7156-4f44-bde3-d60bce4436cd.jpg'
import p2 from'../assets/nails/614d77bc-f739-47e4-a905-092ec074af89.jpg'
import p3 from'../assets/nails/37245208-ae1d-42e4-bad6-6810e0324d01.jpg'

import p4 from'../assets/nails/226af816-01d9-444a-ba11-a51c2b120aad.jpg'
import p5 from'../assets/nails/ac9ca8db-611b-4af2-9d74-bfc70bccd656.jpg'
import p6 from'../assets/nails/37245208-ae1d-42e4-bad6-6810e0324d01.jpg'


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
                    <p className="tel">Tel: (506) 378-9279</p>
                    <p className="address">20 Burbank Court, Moncton</p>
                </div>
            </div>
            <h2 className="home-title">Collections</h2>
            <ImageCarousel images={[p1, p2, p3]} />
            <h2 className="home-title">Our Services</h2>
            <div className="card-container">
                <div className="card">
                    <Link to="/services"><ServiceCard image={p1} name="Pedicure"/></Link>
                    <Link to="/services"><ServiceCard image={p4} name="Manicure"/></Link>
                    <Link to="/services"><ServiceCard image={p5} name="Kids 11 and Under"/></Link>
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