import { useEffect} from "react";

function About(){

    useEffect(() => {
        document.title = "Peridot Nails - About Us";  
    },[])

    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-paragraph-container">
               <p>Welcome to Peridot Nails Spa, your cozy home-based retreat in Moncton where beauty meets comfort. Founded by a passionate, caring, and creative nail technician, Peridot was built with a simple yet heartfelt mission: to bring joy, relaxation, and confidence to every client.</p>
                <p>At Peridot, we believe that getting your nails done should be more than just a beauty routine—it should be a moment of self-care and connection. From the moment you step through our doors, you'll be welcomed into a warm, professional, and peaceful space designed to help you unwind and feel at ease. Whether you're here for a quick touch-up or a full pampering session, your comfort, satisfaction, and experience always come first.</p>
                <p>We take pride in creating beautiful nails that reflect your unique style and wishes, all while ensuring you feel valued and cared for throughout your visit. At Peridot, it's not just about how your nails look—it's about how you feel when you leave.</p>
                <p>Discover the difference of a personal touch at Peridot Nails Spa. We can’t wait to welcome you.</p>
            </div>
        </div>
    )
}

export default About