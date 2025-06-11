import placeholder from '../assets/placeholder.jpg'
import p1 from'../assets/placeholder/p1.jpg'
import p2 from'../assets/placeholder/p2.jpg'
import p3 from'../assets/placeholder/p3.jpg'
import {useEffect} from 'react'
import ImageCarousel from '../components/ImageCarousel.jsx'

function Home(){

    useEffect(() => {
        document.title = "Peridot Nails - Home";
    },[])


    return (
        <div className="home-container">
            <img src={placeholder} alt="front image"/>
            <h2>Features</h2>
            <ImageCarousel images={[p1, p2, p3]} />
            <h2>Services</h2>

        </div>
    )
}

export default Home