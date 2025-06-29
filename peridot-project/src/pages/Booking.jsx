import { useEffect } from "react";

function Booking(){

    useEffect(() => {
        document.title = "Peridot Nails - Booking";  
    },[])

    return (
        <div className="booking-container">
            {/* <img src="https://via.placeholder.com/300x200?text=Placeholder" alt="Placeholder" /> */}
            <h1>Please call: (506) 588-5350 to book an appointment</h1>
        </div>
    )
}

export default Booking