import { useEffect } from "react";

function Booking(){

    useEffect(() => {
        document.title = "Peridot Nails - Booking";  
    },[])

    return (
        <div className="booking-container">
            {/* <img src="https://via.placeholder.com/300x200?text=Placeholder" alt="Placeholder" /> */}
            <div className="content">
                <p>Please call:</p>
                <p>(506) 378-9279</p>
                <p>to book an appointment</p>
            </div>
        </div>
    )
}

export default Booking