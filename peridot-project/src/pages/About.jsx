import { useEffect} from "react";

function About(){

    useEffect(() => {
        document.title = "Peridot Nails - About Us";  
    },[])

    return (
        <div className="about-container">
            {/* <img src="https://via.placeholder.com/300x200?text=Placeholder" alt="Placeholder" /> */}
            <h1>This is about us page</h1>
        </div>
    )
}

export default About