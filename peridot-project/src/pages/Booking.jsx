import { useEffect } from "react";

function Booking(){

    useEffect(() => {
        document.title = "Peridot Nails - Booking";  
    },[])

    return (
        <div className="booking-container">
            {/* <img src="https://via.placeholder.com/300x200?text=Placeholder" alt="Placeholder" /> */}
            <h1>This is booking page</h1>
        </div>
    )
}

export default Booking