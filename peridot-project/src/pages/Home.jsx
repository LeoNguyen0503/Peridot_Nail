import p1 from'../assets/nails/1e4563fa-7156-4f44-bde3-d60bce4436cd.jpg'
import p2 from'../assets/nails/614d77bc-f739-47e4-a905-092ec074af89.jpg'
import p3 from'../assets/nails/37245208-ae1d-42e4-bad6-6810e0324d01.jpg'

import p4 from'../assets/nails/226af816-01d9-444a-ba11-a51c2b120aad.jpg'
import p5 from'../assets/nails/6a7196f5-f0b8-4765-b657-a079e84d6459.jpg'
import p6 from'../assets/nails/514291822_1769481323698392_8823121160383715461_n.jpg'

import promotion from '../assets/promotion/promotion-highResolution.jpeg'


import {useEffect, useState} from 'react'
import ImageCarousel from '../components/ImageCarousel.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import {Link} from 'react-router-dom'

import { FiX } from "react-icons/fi";



function Home(){

    const [showPromotion, setShowPromotion] = useState(true);

    useEffect(() => {
        document.title = "Peridot Nails - Home";
    },[])


    return (
        <section className="home-container">
            {showPromotion && (
                <div className="promotion-overlay">
                    <div className="promotion-modal">
                        <button
                            className="promotion-close"
                            onClick={() => setShowPromotion(false)}
                            aria-label="Close promotion"
                        >
                            <FiX size={32} />
                        </button>
                        {/* <img src={promotion} alt="promotion" /> */}
                        <p>🎉 Peridot Nails Spa Grand Opening – Wednesday, July 9! 🎉</p>
                        <p>We’re so excited to welcome you to our cozy home-based nail spa at 20 Burbank Court, Moncton, NB 💅 </p>
                        <p>✨To celebrate our grand opening, we’re offering special discounts for all services:</p>
                        <p>🔸 30% OFF from July 9 - 15 (Combo services get 10% OFF)</p>
                        <p>🔸 20% OFF from July 16 - 31 (Combo services get 5% OFF)</p>
                        <p>📅 Walk-ins & appointments are welcome!</p>
                        <p>📞 Book now at 506-378-9279 or send us a DM!</p>
                        <p>Follow us and drop by for a relaxing, professional nail experience you’ll love 💚</p>
                    </div>
                </div>
            )}
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
                    <Link to="/services#Pedicure"><ServiceCard image={p6} name="Pedicure"/></Link>
                    <Link to="/services#Manicure"><ServiceCard image={p4} name="Manicure"/></Link>
                    <Link to="/services#Kids11andUnder"><ServiceCard image={p5} name="Kids 11 and Under"/></Link>
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