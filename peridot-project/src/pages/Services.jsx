import { useEffect } from "react";

function Services(){

    useEffect(() => {
            document.title = "Peridot Nails - Services";  
    },[])

    return (
        <div className="services-container">
            {/* <img src="https://via.placeholder.com/300x200?text=Placeholder" alt="Placeholder" /> */}
            <h1>This is services page</h1>
        </div>
    )
}

export default Services